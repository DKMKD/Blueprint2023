import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        resizemode: 'contain',
        height: 500,
        width: 500
    }
})

module.exports = { styles }