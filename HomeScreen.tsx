import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageSlider from './components/ImageSlider';
// import BottomTabs from './components/BottomTabs';
import BookingCart from './components/BookingCart';
import ServicesMenu from './components/ServicesMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// ✅ Define your stack params
type RootStackParamList = {
  Home: undefined;
  ServiceExpand: undefined;
};

// ✅ Props type
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <SearchBar />
        <ImageSlider />
        {/* Horizontal Scroll for Services */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <ServicesMenu />
        </ScrollView>
      </ScrollView>

      {/* Navigate button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ServiceExpand')}
      >
        <Text style={styles.btnText}>Go to Home-service-expand</Text>
      </TouchableOpacity>

      <BookingCart />
      {/* <BottomTabs /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  button: {
    margin: 20,
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
