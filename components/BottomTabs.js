import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const tabs = [
  { id: 'Home', label: 'Home', icon: 'home' },
  { id: 'Bookings', label: 'Bookings', icon: 'calendar-outline' },
  { id: 'Offers', label: 'Offers', icon: 'pricetag-outline' },
  { id: 'Saved', label: 'Saved', icon: 'heart-outline' },
  { id: 'Reels', label: 'Reels', icon: 'play-circle-outline' },
];

export default function BottomTabs() {
  const navigation = useNavigation();
  const route = useRoute(); // current active screen

  return (
    <View style={styles.container}>
      {tabs.map(t => {
        const isActive = route.name === t.id; // check route
        return (
          <TouchableOpacity
            key={t.id}
            onPress={() => navigation.navigate(t.id)}
            style={styles.tab}
          >
            <Ionicons
              name={t.icon}
              size={22}
              color={isActive ? 'black' : 'gray'} // ✅ use route.name
            />
            <Text
              style={[styles.label, { color: isActive ? 'black' : 'gray' }]}
            >
              {t.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f7f7f7',
  },
  tab: { alignItems: 'center' },
  label: { fontSize: 12, marginTop: 2 },
});
