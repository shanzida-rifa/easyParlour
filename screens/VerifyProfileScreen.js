import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar'; // adjust path if needed
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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

      <ScrollView contentContainerStyle={styles.container}>
        {/* =================== Personal Info =================== */}
        <Text style={styles.header}>Personal Information (Profile)</Text>

        <Text style={styles.label}>* Profile Name</Text>
        <TextInput style={styles.input} placeholder="Enter Profile Name" />

        <Text style={styles.label}>02 Category</Text>
        <View style={styles.row}>
          {['Gold', 'Silver', 'Platinum'].map(c => (
            <TouchableOpacity key={c} style={styles.categoryBtn}>
              <Text>{c}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>* Name as per Document</Text>
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="First" />
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 8 }]}
            placeholder="Last"
          />
        </View>

        <Text style={styles.label}>* Gender</Text>
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Male" />
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 8 }]}
            placeholder="Female"
          />
        </View>

        <Text style={styles.label}>DOB</Text>
        <TextInput style={styles.input} placeholder="DD/MM/YYYY" />

        <Text style={styles.label}>* Mobile</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="+8801..."
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="example@email.com"
        />

        {/* =================== Documents =================== */}
        <Text style={styles.header}>Personal Documents (Verification)</Text>

        <Text style={styles.label}>* NID</Text>
        <TextInput style={styles.input} placeholder="Enter NID number" />

        <Text style={styles.label}>Passport</Text>
        <TextInput style={styles.input} placeholder="Enter Passport number" />

        <Text style={styles.label}>Birth Certificate (if under 18)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Birth Certificate No."
        />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Save</Text>
        </TouchableOpacity>

        {/* =================== Scan Option =================== */}
        <View style={styles.scanSection}>
          <Text style={styles.scanText}>
            * Verify your Profile form a Verified ID {'\n'}
            Take photo your NID card - Front & back
          </Text>
          <TouchableOpacity style={styles.scanBtn}>
            <Text style={{ color: '#000' }}>Scan</Text>
          </TouchableOpacity>
        </View>

        {/* =================== Profile Image =================== */}
        <Text style={styles.header}>* Profile Image (Attachment)</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.attachmentBtn}>
            <Ionicons name="attach" size={20} color="#555" />
            <Text> Upload Profile Image</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.previewImage}
          />
        </View>

        {/* =================== Live Selfie =================== */}
        <Text style={styles.header}>Live Selfie (Attachment)</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.attachmentBtn}>
            <Ionicons name="camera" size={20} color="#555" />
            <Text> Capture Live Selfie</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.previewImage}
          />
        </View>

        {/* =================== Verification Friend & Family =================== */}
        <Text style={styles.header}>Verification Friend & Family</Text>
        <View style={styles.card}>
          <Text>ID No. 092713</Text>
          <Text>Name as per Document Referral</Text>
          <Text>Mobile: +8801xxxxxxx</Text>
          <Text>Email: example@email.com</Text>
          <Text style={{ marginTop: 6, color: '#666' }}>
            Consign has been make as Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </Text>
          <TouchableOpacity style={styles.attachmentBtn}>
            <Ionicons name="attach" size={20} color="#555" />
            <Text> Upload Attachment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginRight: 8,
  },
  saveBtn: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  scanSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  scanText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 13,
    color: '#333',
  },
  scanBtn: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    alignItems: 'center',
  },
  attachmentBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
});
