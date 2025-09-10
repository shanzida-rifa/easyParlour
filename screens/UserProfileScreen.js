import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';

export default function UserProfileScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace('Login'); // navigate to login and clear stack
  };

  const menuItems = [
    { id: 1, label: 'My Plan' },
    { id: 2, label: 'My Interest' },
    { id: 3, label: 'Plus membership' },
    { id: 4, label: 'My rating' },
    { id: 5, label: 'Manage addresses' },
    { id: 6, label: 'Verified profile' },
    { id: 7, label: 'Messages' },
    { id: 8, label: 'Rewards' },
    { id: 9, label: 'Referral' },
    { id: 10, label: 'Vouchers' },
    { id: 11, label: 'Online Payment' },
    { id: 12, label: 'Terms and policy' },
    { id: 13, label: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <SearchBar />
        </View>

        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Profile Info */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>PRABIR</Text>
            <Text style={styles.details}>+880 1719245215</Text>
            <Text style={styles.details}>Prober.ruet@gmail.com</Text>
            <Text style={styles.details}>Basundhara, Dhaka-1210</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Ionicons key={i} name="star" size={18} color="#f1c40f" />
                ))}
            </View>
          </View>
          <View style={styles.side}>
            <Text style={styles.liveText}>● Live</Text>
            <Text style={styles.goldText}>Gold Membership</Text>

            <TouchableOpacity
              style={styles.verifyBtn}
              onPress={() => navigation.navigate('VerifyProfile')}
            >
              <Text style={{ color: '#fff', fontWeight: '600' }}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Scrollable Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 15 }}
        >
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>My Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Help & Support</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Menu Items */}
        {menuItems.map(item => (
          <TouchableOpacity key={item.id} style={styles.menuRow}>
            <Text style={styles.menuText}>{item.label}</Text>
            <MaterialIcons name="chevron-right" size={24} color="#aaa" />
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 10,
    flex: 1,
    marginRight: 12,
    alignItems: 'center',
  },
  searchText: { marginLeft: 6, color: '#555' },
  profileCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fdfdfd',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: { width: 70, height: 70, borderRadius: 35, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '700' },
  details: { fontSize: 14, color: '#555' },
  side: { alignItems: 'flex-end' },
  liveText: { fontSize: 14, color: 'green', marginBottom: 4 },
  goldText: { fontSize: 13, color: '#999' },
  verifyBtn: {
    backgroundColor: '#007bff', // Standard blue
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginTop: 6,
    alignItems: 'center',
  },

  verifiedBtn: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 8,
    elevation: 2,
  },
  cardText: { fontSize: 15, fontWeight: '500' },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuText: { fontSize: 16, color: '#333' },
  logoutBtn: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    alignItems: 'center',
    padding: 12,
  },
  logoutText: { fontSize: 16, color: '#333', fontWeight: '600' },
});
