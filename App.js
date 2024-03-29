import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={InAppBrowser.open("https://google.com")}>
        Open up App.js to start working on your app!
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
