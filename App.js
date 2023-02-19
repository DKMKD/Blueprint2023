import React from 'react';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrainBreakScreen from './BrainBreakScreen';
import ScheduleScreen from './ScheduleScreen'
import { styles } from './styles'
import butterflyImage from './assets/butterflies.jpg'

const Stack = createNativeStackNavigator()

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

const quotes = [
  {quote:"\“All our dreams can come true, if we have the courage to pursue them.\” —Walt Disney"},
  {quote:"\“The secret of getting ahead is getting started.\” —Mark Twain"},
  {quote:"\“The best time to plant a tree was 20 years ago. The second best time is now.\” ―Chinese Proverb"},
  {quote:"\“It’s hard to beat a person who never gives up.\” —Babe Ruth"},
  {quote:"\“If people are doubting how far you can go, go so far that you can’t hear them anymore.\” —Michele Ruiz"},
];

const getRandomQuote = () => {
  return quotes[~~(Math.random() * quotes.length)]
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
        <Text style={styles.quote}>{getRandomQuote().quote}</Text>
      </ImageBackground>
    </View>
  )
}

export default App;