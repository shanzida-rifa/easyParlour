import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tabs = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'bookings', label: 'Bookings', icon: 'calendar-outline' },
  { id: 'offers', label: 'Offers', icon: 'pricetag-outline' },
  { id: 'saved', label: 'Saved', icon: 'heart-outline' },
  { id: 'reels', label: 'Reels', icon: 'play-circle-outline' },
];

export default function BottomTabs() {
  const [active, setActive] = useState('home');

  return (
    <View style={styles.container}>
      {tabs.map(t => (
        <TouchableOpacity
          key={t.id}
          onPress={() => setActive(t.id)}
          style={styles.tab}
        >
          <Ionicons
            name={t.icon}
            size={22}
            color={active === t.id ? 'black' : 'gray'}
          />
          <Text
            style={[
              styles.label,
              { color: active === t.id ? 'black' : 'gray' },
            ]}
          >
            {t.label}
          </Text>
        </TouchableOpacity>
      ))}
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
