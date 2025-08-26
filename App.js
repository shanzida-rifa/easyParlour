import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageSlider from './components/ImageSlider';
import ServicesMenu from './components/ServicesMenu';
import BookingCart from './components/BookingCart';
import BottomTabs from './components/BottomTabs';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <ImageSlider />
        <ServicesMenu />
        <BookingCart />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
