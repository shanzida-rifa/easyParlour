import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.header}>
      {/* Left menu button */}
      <TouchableOpacity>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Easy Parlour</Text>

      {/* Right icons */}
      <View style={styles.right}>
        {/* User Profile */}
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Ionicons
            name="person-circle"
            size={30}
            color="#000"
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications-outline" size={22} />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  badge: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    position: 'absolute',
    right: -2,
    top: -2,
  },
});
