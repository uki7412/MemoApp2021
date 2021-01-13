import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
// import CircleButton from '../components/CircleButton';
import AppBar from '../components/AppBar';

export default function MemoDetailScreen() {
  return (
    <View sytyle={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021/01/12</Text>
      </View>
      <ScrollView>
        <Text>
          xxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>
      </ScrollView>
      {/* <CircleButton /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  }
})
