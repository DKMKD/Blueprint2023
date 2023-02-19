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
    breakText: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 50,
        fontWeight: "bold"
    },
    breakImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        resizemode: 'contain',
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 5,
        height: 350,
        width: 350
    },
    background: {
        height: '100%',
        width: '100%',
    }
})

module.exports = { styles }