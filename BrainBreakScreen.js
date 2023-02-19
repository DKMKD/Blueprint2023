import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import journalImage from './assets/breathing.png';
import meditateImage from './assets/meditation.png'
import drawingImage from './assets/painting.png'
import cloudImage from './assets/clouds.png'
import dancingImage from './assets/dancing.png'
import breathingImage from './assets/breathing.png'
import walkingImage from './assets/walking.png'
import fruitImage from './assets/peaches.png'
import stretchingImage from './assets/stretch.png'
import phoneImage from './assets/phone.png'
import styles from './styles'
import riverImage from './assets/rivers.jpg';

/*
Brain breaks!
1. write a journal
2. meditate
3. draw something
4. watch the clouds
5. dance!
6. take deep breaths
7. take a walk
8. have a snack!
9. do a handstand!
10. call a friend!
*/

const breaks = [
  {activity:"Write a journal!",image:journalImage},
  {activity:"Focus in and meditate!", image:meditateImage},
  {activity:"Draw something!", image:drawingImage},
  {activity:"Watch the clouds!", image:cloudImage},
  {activity:"Lose yourself to dance!", image:dancingImage},
  {activity:"Deep breaths!", image:breathingImage},
  {activity:"Take a walk!", image:walkingImage},
  {activity:"Have a healthy snack!", image:fruitImage},
  {activity:"Stretch it out!", image:stretchingImage},
  {activity:"Call a friend!", image:phoneImage}
];

const getRandom = () => {
  return breaks[~~(Math.random() * breaks.length)]
}

const BrainBreakScreen = ({navigation, route}) => {
   const random = getRandom();
    return (
      <View>
        <ImageBackground source={riverImage} resizeMode="stretch" style={styles.background}>
          <Text>{random["activity"]}</Text>
          <Image 
            style={styles.breakImage}
            source={random["image"]}/>
        </ImageBackground>
      </View>
    )
  }

  

export default BrainBreakScreen;