import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useNavigation,
  useRoute,
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

// Define your tab items
const tabs = [
  { id: 'Home', label: 'Home', icon: 'home' },
  { id: 'Bookings', label: 'Bookings', icon: 'calendar-outline' },
  { id: 'Offers', label: 'Offers', icon: 'pricetag-outline' },
  { id: 'Saved', label: 'Saved', icon: 'heart-outline' },
  { id: 'Reels', label: 'Reels', icon: 'play-circle-outline' },
];

export default function BottomTabs() {
  // Use typed navigation
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<ParamListBase, string>>();

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = route.name === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => navigation.navigate(tab.id)}
            style={styles.tab}
          >
            <Ionicons
              name={tab.icon as any} // Ionicons type fix
              size={22}
              color={isActive ? 'black' : 'gray'}
            />
            <Text
              style={[styles.label, { color: isActive ? 'black' : 'gray' }]}
            >
              {tab.label}
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
