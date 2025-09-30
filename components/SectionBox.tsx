import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// Define props interface
interface SectionBoxProps {
  images?: string[];
  onPress?: (index: number) => void;
}

export default function SectionBox({ images = [], onPress }: SectionBoxProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            activeOpacity={0.8}
            onPress={() => onPress && onPress(index)}
          >
            <Image source={{ uri: img }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  box: {
    width: width - 32, // full width with margin
    height: 150,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
