import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BookingCart() {
  return (
    <TouchableOpacity style={styles.cart}>
      <Icon name="basket-outline" size={18} />
      <Text style={styles.text}> Booking in Cart </Text>
      <View style={styles.badge}>
        <Text style={{ color: 'white', fontSize: 12 }}>2</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cart: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    margin: 16,
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { marginHorizontal: 6, fontWeight: '500' },
  badge: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 6,
    marginLeft: 6,
  },
});
