import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SectionBox() {
  return <View style={styles.box}></View>;
}

const styles = StyleSheet.create({
  box: {
    height: 150,
    marginHorizontal: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 20,
  },
});
