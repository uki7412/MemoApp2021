// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';

export default function App() {
  return (
    <View style={styles.container}>

      <AppBar />
      <MemoList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
