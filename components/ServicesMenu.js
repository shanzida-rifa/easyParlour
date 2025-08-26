import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const services = [
  { id: '1', name: 'Waxing' },
  { id: '2', name: 'Facial' },
  { id: '3', name: 'Pedicure' },
  { id: '4', name: 'Manicure' },
  { id: '5', name: 'Hair Cutting' },
  { id: '6', name: 'Massage' },
];

export default function ServicesMenu() {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.title}>
        Beauty <Text style={{ fontStyle: 'italic' }}>Services</Text>
      </Text>
      <FlatList
        horizontal
        data={services}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://www.gettimely.com/media/a1hbvvl3/timely-blog-8-salon-ideas-spa-salons.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 10,
  },
  card: {
    alignItems: 'center',
    marginRight: 14,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    marginTop: 6,
    fontSize: 14,
  },
});
