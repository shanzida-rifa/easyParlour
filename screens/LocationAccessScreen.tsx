import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// define your navigator types
type RootStackParamList = {
  LocationAccess: undefined;
  Home: undefined;
};

type LocationAccessScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'LocationAccess'>;
};

export default function LocationAccessScreen({
  navigation,
}: LocationAccessScreenProps) {
  const handleAllowLocation = () => {
    const mockLocation = {
      latitude: 37.78825,
      longitude: -122.4324,
    };

    console.log('Location accessed:', mockLocation);

    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      {/* Top App Name */}
      <Text style={styles.headerTitle}>Easy Parlour</Text>

      {/* Center Logo + Texts */}
      <View style={styles.content}>
        <Image
          source={require('../assets/images/easyparlour.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Please Allow Location Access</Text>
        <Text style={styles.description}>
          We will find the best parlors and beauty services near you.
        </Text>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.allowButton}
          onPress={handleAllowLocation}
        >
          <Text style={styles.allowButtonText}>Allow Location Access</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  bottom: {
    alignItems: 'center',
    marginBottom: 30,
  },
  allowButton: {
    backgroundColor: '#000',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  allowButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
