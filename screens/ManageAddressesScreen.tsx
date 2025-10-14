import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

const ManageAddressesScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

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

      {/* 🔹 Content */}
      <ScrollView style={{ padding: 16 }}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>
            Addresses <Text style={{ fontSize: 13 }}>(Incl google map)</Text>
          </Text>

          <TouchableOpacity style={styles.googleBtn}>
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 Google Map */}
        <MapView style={styles.map} region={region} onRegionChange={setRegion}>
          <Marker coordinate={region} title="Selected Location" />
        </MapView>

        {/* 🔹 Add New Button */}
        <TouchableOpacity
          style={styles.addNewBtn}
          onPress={() => navigation.navigate('AddNewAddress')}
        >
          <Text style={styles.addNewText}>Add new</Text>
        </TouchableOpacity>

        {/* Example Address Card */}
        <View style={styles.addressBox}>
          <Text style={styles.addressLabel}>01 Home</Text>
          <View style={styles.addressDetails}></View>
          <TouchableOpacity style={styles.deleteEdit}>
            <Text style={styles.deleteText}>Delete/edit</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: { fontSize: 18, fontWeight: '600' },
  googleBtn: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  map: {
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  addNewBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 10,
  },
  addNewText: { fontSize: 15, fontWeight: '500' },
  addressBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  addressLabel: { fontSize: 15, fontWeight: '600', marginBottom: 5 },
  addressDetails: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  deleteEdit: { alignSelf: 'flex-end', marginTop: 5 },
  deleteText: { color: '#555', fontSize: 13 },
  saveBtn: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: { fontSize: 16, fontWeight: '600' },
});

export default ManageAddressesScreen;
