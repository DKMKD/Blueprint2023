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
        height: 200,
        width: 200
    }
})

module.exports = { styles }