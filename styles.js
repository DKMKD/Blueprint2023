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