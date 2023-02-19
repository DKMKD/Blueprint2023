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
        padding: 5,
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#FFF',
        fontSize: 50,
        fontWeight: "bold",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#999'
    },
    breakImage: {
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25,
        height: 350,
        width: 350,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    breakTimer: {
        textAlign: 'center',
        padding: 5,
        marginTop: 25,
        marginLeft: 125,
        marginRight: 125,
        backgroundColor: '#FFF',
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#999'
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
    background: {
        height: '100%',
        width: '100%',
    },
    quote: {
        padding: 5,
        marginTop: 450,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#FFF',
        fontSize: 35,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#999'
    }
})

module.exports = { styles }