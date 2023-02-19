import React, { useState, useRef, useEffect } from "react"
import {Pressable, View, Text, Alert, ImageBackground} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles'
import treeImage from './assets/trees.jpg'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
}),
})

const ScheduleScreen = ({navigation, route}) => {
    const [pushNotificationToken, setPushNotificationToken] = useState('')
    const [isNotifying, setNotifying] = useState(false)
    const notificationListener = useRef()
    const responseListener = useRef()
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setPushNotificationToken(token))
      notificationListener.current = Notifications.addNotificationReceivedListener(notificationListener => {
      })
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response))
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current)
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }, [])
    const [date, setDate] = useState(new Date())

    return (
      <View style={{textAlign: 'center', justifyContent: 'center', flex: 1}}>
        <ImageBackground source={treeImage} resizeMode="stretch" style={styles.background}>
          <Text style={{fontSize: 24, textAlign: 'center'}}>Choose a time to be notified to remind you to take a brain break!</Text>
          <DateTimePicker textColor="black"
            modal
            mode="datetime"
            display="spinner"
            value={date}
            onChange={(event, d) => {
                if (d.getTime() < Date.now()) {
                    Alert.alert("Sorry!", "You cannot set the date in the past.")
                    setDate(new Date())
                    return
                }
                setDate(d)
            }}
          />
          <Pressable 
          style={styles.button}
          onPress={async () => {
                Alert.alert("We will notify you when it's time to take a break.")
              await schedulePushNotification('[Take 5]', "It's time to take a brain break.", ~~((date.getTime() - Date.now()) / 1000))
          }}
          >
            <Text style={styles.buttonText}>Schedule</Text>
          </Pressable>
        </ImageBackground>
      </View>
    )
  }

  async function schedulePushNotification(title, body, secs) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: {breakTime: true},
      },
      trigger: { seconds: secs },
    });
  }

  // Function taken and modified from Expo Docs
async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    if (!Device.isDevice) return;
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    console.log('Notification token granted')
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }

  export default ScheduleScreen;