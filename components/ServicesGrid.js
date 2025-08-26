import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const services = [
  { id: '1', name: 'Wax' },
  { id: '2', name: 'Facial' },
  { id: '3', name: 'Haircutting' },
  { id: '4', name: 'Massage' },
  { id: '5', name: 'Wax' },
  { id: '6', name: 'Wax' },
  { id: '7', name: 'Facial' },
  { id: '8', name: 'Haircutting' },
  { id: '9', name: 'Threading' },
  { id: '10', name: 'Massage' },
  { id: '11', name: 'Massage' },
  { id: '12', name: 'Massage' },
];

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);

  // show first 9 items when collapsed
  const visibleServices = showAll ? services : services.slice(0, 9);
  // pad for even 3-column rows
  const numColumns = 3;
  const paddedServices = [...visibleServices];
  while (paddedServices.length % numColumns !== 0) {
    paddedServices.push({ id: `empty-${paddedServices.length}`, empty: true });
  }

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <FlatList
        data={paddedServices}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        scrollEnabled={false} // disable scroll, take only content height
        renderItem={({ item }) =>
          item.empty ? (
            <View style={[styles.box, styles.invisibleBox]} />
          ) : (
            <TouchableOpacity style={styles.box}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
        }
      />

      {/* Show button only if there are more than 9 items */}
      {services.length > 9 && (
        <TouchableOpacity
          style={styles.viewAll}
          onPress={() => setShowAll(!showAll)}
        >
          <Text style={{ color: 'black', fontWeight: '500' }}>
            {showAll ? '▲ View Less' : '▼ View All Services'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 90,
    backgroundColor: '#f5f5f5',
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  viewAll: {
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
});
