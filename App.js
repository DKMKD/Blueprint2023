import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const onPressFirstButton = () => {
  console.log("Button pressed")
}

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Text>Open up App.js to on your app!</Text>
        <Pressable onPress={onPressFirstButton}>
          <Text>This is a button (needs to be styled because it currently looks like text) </Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
