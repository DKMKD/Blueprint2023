import React, { useState } from "react"
import {Pressable, View, Text} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles'
import treeImage from './assets/trees.jpg'

const ScheduleScreen = ({navigation, route}) => {
    const [pushNotificationToken, setPushNotificationToken] = useState('')
    const [isNotifying, setNotifying] = useState(false)
    const notificationListener = useRef()
    const responseListener = useRef()
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setPushNotificationToken(token))
      notificationListener.current = Notifications.addNotificationReceivedListener(notificationListener => {
        //setNotifying(notificationListener)
        console.log('received')
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
            onChange={(event, date) => {
              setDate(date)
            }}
          />
          <Pressable 
          style={styles.button}
          onPress={async () => {
              await schedulePushNotification('[Take 5]', "It's time to take a brain break.")
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