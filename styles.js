import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    title: {
        flex: 1,
        padding: 24,
        backgroundColor: '#5d883f',
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#000',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 24,
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