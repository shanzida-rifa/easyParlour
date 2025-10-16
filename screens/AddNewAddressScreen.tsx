// import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AddNewAddressScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {/* SearchBar component - you'll need to implement or import this */}
          <View style={styles.searchBarPlaceholder}>
            <Text>Search location...</Text>
          </View>
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

        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text>Map will be displayed here</Text>
        </View>

        {/* Write in detail */}
        <Text style={styles.label}>Write in detail</Text>
        <TextInput style={styles.inputBox} multiline />

        {/* Special Instruction */}
        <View style={styles.sectionRow}>
          <Text style={styles.label}>Special Instruction</Text>
          <Text style={styles.editText}>Delete/edit</Text>
        </View>
        <TextInput style={styles.inputBox} multiline />

        {/* Address name */}
        <View style={styles.sectionRow}>
          <Text style={styles.label}>Address name</Text>
          <Text style={styles.editText}>Delete/edit</Text>
        </View>
        <TextInput style={styles.inputBox} />

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
  },
  headerText: { fontSize: 18, fontWeight: '600' },
  googleBtn: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  mapPlaceholder: {
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  label: { fontSize: 15, marginBottom: 6 },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    minHeight: 60,
    marginBottom: 10,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editText: { fontSize: 13, color: '#666' },
  saveBtn: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: { fontSize: 16, fontWeight: '600' },
  searchBarPlaceholder: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
});

export default AddNewAddressScreen;
