import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Memo Apps</Text>
        <Text style={styles.appBarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#fff',
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
