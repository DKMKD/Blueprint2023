import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrainBreakScreen from './BrainBreakScreen';
import ScheduleScreen from './ScheduleScreen'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { styles } from './styles'
import butterflyImage from './assets/butterflies.jpg'

const Stack = createNativeStackNavigator()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

const App = () => {
  
  return (
    <NavigationContainer style={{backgroundColor: '#5d883f'}}>
      <Stack.Navigator style={{backgroundColor: '#5d883f'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Take 5', backgroundColor: '#5d883f'}} 
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
      <ImageBackground source={butterflyImage} resizeMode="stretch" style={styles.background}>
        <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Schedule')
        }}>
        <Text style={styles.buttonText}>Schedule a Brain Break</Text>

        </Pressable>
        <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('BrainBreak')
        }}>
          <Text style={styles.buttonText}>Take a Brain Break</Text>
        </Pressable>
        {/* <Button
          title="Test Notification"
          onPress={async () => {
            await schedulePushNotification("Test", "Testing123")
          }}
        /> */}
      </ImageBackground>
    </View>
  )
}

export default App;