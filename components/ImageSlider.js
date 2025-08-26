import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  'https://www.gettimely.com/media/a1hbvvl3/timely-blog-8-salon-ideas-spa-salons.jpg',
  'https://via.placeholder.com/400x200.png',
  'https://via.placeholder.com/400x200.png',
];

export default function ImageSlider() {
  return (
    <View style={styles.wrapper}>
      <Swiper autoplay dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
        {images.map((img, i) => (
          <Image key={i} source={{ uri: img }} style={styles.image} />
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 12,
  },
  image: {
    width: width - 32,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  dot: { backgroundColor: '#ccc', width: 8, height: 8, borderRadius: 4 },
  activeDot: { backgroundColor: '#000', width: 8, height: 8, borderRadius: 4 },
});
