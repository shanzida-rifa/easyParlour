import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Easy Parlour</Text>
      <View style={styles.right}>
        <Ionicons name="people-outline" size={22} style={styles.icon} />
        <Ionicons name="notifications-outline" size={22} />
        <View style={styles.badge} />
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
    right: 0,
    top: -2,
  },
});
