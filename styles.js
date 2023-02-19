import { StyleSheet } from 'react-native';

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
        textAlignVertical: 'center',
        marginTop: 50,
        marginLeft: 75,
        marginRight: 75,
        backgroundColor: '#fff',
        fontSize: 24,
        fontWeight: "bold",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
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
    breakTimer: {
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
        padding: 15,
        marginTop: 450,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
        fontSize: 22,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'
    }
})

module.exports = { styles }