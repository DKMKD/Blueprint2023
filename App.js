import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles' 
import BrainBreakScreen from './BrainBreakScreen';
import ScheduleScreen from './ScheduleScreen'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'

const Stack = createNativeStackNavigator()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

const App = () => {
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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Take 5'}} 
        />
        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{title: 'Schedule'}} 
        />
        <Stack.Screen
          name="BrainBreak"
          component={BrainBreakScreen}
          options={{title: 'Brain Break'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Button
      title="Go to Schedule Screen"
      onPress={() => {
        navigation.navigate('Schedule')
      }}
      />
      <Button
      title="Go to Brain Break Screen"
      onPress={() => {
        navigation.navigate('BrainBreak')
      }}
      />
      <Button
        title="Test Notification"
        onPress={async () => {
          await schedulePushNotification("Test", "Testing123")
        }}
      />
    </View>
  )
}

async function schedulePushNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: {breakTime: true},
    },
    trigger: { seconds: 2 },
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

export default App;