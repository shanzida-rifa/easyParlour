import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Define the type of your navigation stack
type RootStackParamList = {
  MyRating: undefined;
  // Add other screens if needed
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MyRating'>;

const MyRatingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>My Ratings</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.profileBox}>
          <View style={styles.avatar} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.name}>PRABIR</Text>
            <Text style={styles.sub}>Gold Membership</Text>
            <Text style={styles.sub}>Verified</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Reviews from Sellers</Text>

        {Array(4)
          .fill(0)
          .map((_, i) => (
            <View key={i} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.avatarSmall} />
                <View>
                  <Text style={styles.reviewName}>ABC Beauty Parlour</Text>
                  <Text style={{ color: '#777' }}>5.00 ★</Text>
                </View>
              </View>
              <Text style={styles.tag}>Service taken: Haircut</Text>
              <Text style={styles.tag}>Expert: Maimuna (ID: 20010)</Text>
              <Text style={styles.reviewText}>
                There are many variations of passages of Lorem Ipsum
                available...
              </Text>
              <Text style={styles.time}>4 days ago</Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: { fontSize: 18, fontWeight: '600', marginLeft: 12 },
  profileBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#ddd' },
  name: { fontSize: 18, fontWeight: '700' },
  sub: { fontSize: 14, color: '#777' },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  reviewCard: {
    backgroundColor: '#fdfdfd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  reviewName: { fontSize: 15, fontWeight: '600' },
  tag: { fontSize: 13, color: '#444', marginBottom: 4 },
  reviewText: { fontSize: 14, color: '#555', marginVertical: 6 },
  time: { fontSize: 12, color: '#999' },
});

export default MyRatingScreen;
