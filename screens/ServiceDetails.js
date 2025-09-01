import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ServiceDetails({ route, navigation }) {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.price}>Price: ${service.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  price: { fontSize: 18, marginBottom: 20 },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  addButtonText: { color: '#fff', fontSize: 16 },
});
