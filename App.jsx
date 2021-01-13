import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styels.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>

  );
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
