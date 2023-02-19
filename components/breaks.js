
import journalImage from '../assets/breathing.jpg';
import meditateImage from '..assets/meditation.jpg'
import drawingImage from '..assets/painting.jpg'
import cloudImage from '..assets/clouds.jpg'
import dancingImage from '..assets/dancing.jpg'
import breathingImage from '..assets/breathing.jpg'
import walkingImage from '..assets/walking.jpg'
import fruitImage from '..assets/peaches.jpg'
import stretchingImage from '..assets/stretch.jpg'
import phoneImage from '..assets/phone.jpg'

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
    {activity:"Write a journal!",image:{journalImage}},
    {activity:"Focus in and meditate!", image:{meditateImage}},
    {activity:"Draw something!", image:{drawingImage}},
    {activity:"Watch the clouds!", image:{cloudImage}},
    {activity:"Lose yourself to dance!", image:{dancingImage}},
    {activity:"Deep breaths!", image:{breathingImage}},
    {activity:"Take a walk!", image:{walkingImage}},
    {activity:"Have a healthy snack!", image:{fruitImage}},
    {activity:"Stretch it out!", image:{stretchingImage}},
    {activity:"Call a friend!", image:{phoneImage}}
];

const getRandom = () => {
    return breaks[Math.random() * breaks.length];
}
    

module.exports = { breaks }