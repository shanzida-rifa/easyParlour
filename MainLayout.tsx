import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabs from './components/BottomTabs';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});

export default MainLayout;
