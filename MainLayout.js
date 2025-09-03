import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabs from './components/BottomTabs';

export default function MainLayout({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
