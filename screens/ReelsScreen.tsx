import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe';

const { height, width } = Dimensions.get('window');

export default function ReelsScreen() {
  const [playing, setPlaying] = useState<boolean>(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  // Example YouTube Shorts (replace with your real IDs)
  const reelIds: string[] = [
    'V335QDuBzTo', // Kashee's Beauty Parlour makeup tutorial
    // Add more IDs here...
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
        {reelIds.map((id, index) => (
          <View key={index} style={styles.videoPage}>
            <YoutubePlayer
              height={height * 0.6}
              width={width}
              play={playing}
              videoId={id}
              onChangeState={onStateChange}
            />
            <Text style={styles.caption}>
              Reel {index + 1} – Makeup Tutorial
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  videoPage: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});
