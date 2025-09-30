import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  'https://www.gettimely.com/media/a1hbvvl3/timely-blog-8-salon-ideas-spa-salons.jpg',
  'https://i.pinimg.com/474x/29/e8/b2/29e8b2661b22bb5710413d8e08c0387a.jpg',
  'https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=',
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
