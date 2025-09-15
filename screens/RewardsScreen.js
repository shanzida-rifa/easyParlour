// screens/RewardsScreen.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RewardsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Rewards</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Reward Points */}
        <View style={styles.pointsCard}>
          <Text style={styles.pointsTitle}>Reward Points</Text>
          <Text style={styles.pointsValue}>1258</Text>
          <Text style={styles.pointsSub}>Redeem before it expires!</Text>
        </View>

        {/* Expiring Soon */}
        <View style={styles.expireBox}>
          <Ionicons name="time-outline" size={20} color="#444" />
          <View style={{ marginLeft: 10 }}>
            <Text>270 points expire in 24 days.</Text>
            <Text style={{ fontSize: 12, color: '#777' }}>
              Expires on: 31/07/2025
            </Text>
          </View>
        </View>

        {/* Rewards List */}
        <Text style={styles.sectionTitle}>Rewards</Text>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <View key={i} style={styles.rewardRow}>
              <View style={styles.rewardIcon} />
              <View style={{ flex: 1 }}>
                <Text>BDT 25 Discount on BDT 500 or more payment.</Text>
                <Text style={{ color: '#777' }}>Cost: 1000 Points</Text>
                <TouchableOpacity>
                  <Text style={styles.claim}>Claim Reward</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

        {/* Points History */}
        <Text style={styles.sectionTitle}>Points History</Text>
        <View style={styles.historyRow}>
          <Text>Refer App</Text>
          <Text style={{ color: 'green' }}>+50 Points</Text>
        </View>
        <View style={styles.historyRow}>
          <Text>Order Pizza</Text>
          <Text style={{ color: 'green' }}>+100 Points</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  pointsCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  pointsTitle: { fontSize: 16, fontWeight: '500' },
  pointsValue: { fontSize: 32, fontWeight: '700', marginVertical: 6 },
  pointsSub: { color: '#777' },
  expireBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fdfdfd',
    borderRadius: 8,
    marginBottom: 20,
    elevation: 1,
  },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginVertical: 10 },
  rewardRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  rewardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  claim: { color: '#007bff', marginTop: 4 },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
