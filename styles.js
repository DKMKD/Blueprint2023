import { StyleSheet, Dimensions } from 'react-native';

const windowDimension =  Dimensions.get('window')
const screenHeight = windowDimension.height
const screenWidth = windowDimension.width
console.log(`Height=${screenHeight} width=${screenWidth}`)

const styles = StyleSheet.create({
    title: {
        flex: 1,
        padding: 24,
        backgroundColor: '#5d883f',
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        resizemode: 'contain',
        height: 350,
        width: 350
    },
    background: {
        height: '100%',
        width: '100%',
        //flex: 1,
    }
})

module.exports = { styles }