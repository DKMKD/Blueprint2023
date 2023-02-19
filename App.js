import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles' 
import BrainBreakScreen from './BrainBreakScreen';
import ScheduleScreen from './ScheduleScreen'

const Stack = createNativeStackNavigator()

const App = () => {
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
    </View>
  )
}

export default App;