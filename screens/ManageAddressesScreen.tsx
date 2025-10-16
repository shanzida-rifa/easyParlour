import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  ManageAddresses: undefined;
  AddNewAddress: undefined;
  EditAddress: { id: string };
};

type ManageAddressesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ManageAddresses'
>;

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  type: 'Home' | 'Work' | 'Other';
}

const ManageAddressesScreen = () => {
  const navigation = useNavigation<ManageAddressesNavigationProp>();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const dummyData: Address[] = [
      {
        id: '1',
        name: 'Prabir',
        phone: '+8801719245215',
        address: '123, Bashundhara, Dhaka-1210',
        type: 'Home',
      },
      {
        id: '2',
        name: 'Office Address',
        phone: '+88018900987',
        address: '45, Banani, Dhaka',
        type: 'Work',
      },
    ];
    setAddresses(dummyData);
  }, []);

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Address',
      'Are you sure you want to delete this address?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => setAddresses(prev => prev.filter(a => a.id !== id)),
          style: 'destructive',
        },
      ],
    );
  };

  const handleEdit = () => {
    navigation.navigate('AddNewAddress');
  };

  const renderAddressItem = ({ item }: { item: Address }) => (
    <View style={styles.addressCard}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phone}>{item.phone}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <TouchableOpacity onPress={handleEdit}>
          <MaterialIcons name="edit" size={22} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={{ marginLeft: 10 }}
        >
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.typeTag}>
        <Text style={styles.typeText}>{item.type}</Text>
      </View>
    </View>
  );

  const filteredAddresses = addresses.filter(
    a =>
      a.name.toLowerCase().includes(searchText.toLowerCase()) ||
      a.address.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Addresses</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search address..."
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>

      {/* New Bordered Box */}
      <View style={styles.addressBox}>
        <View style={styles.addressBoxHeader}>
          <Text style={styles.addressBoxTitle}>
            Addresses{' '}
            <Text style={{ fontWeight: '400' }}>(Incl google map)</Text>
          </Text>
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.addNewButton}
          onPress={() => navigation.navigate('AddNewAddress')}
        >
          <Text style={styles.addNewButtonText}>Add new</Text>
        </TouchableOpacity>
      </View>

      {/* Address List */}
      <FlatList
        data={filteredAddresses}
        keyExtractor={item => item.id}
        renderItem={renderAddressItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default ManageAddressesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    margin: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    height: 40,
  },
  addressBox: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  addressBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressBoxTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  googleButtonText: {
    fontSize: 14,
    color: '#333',
  },
  addNewButton: {
    marginTop: 12,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  addNewButtonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  addressCard: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  phone: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  address: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  typeTag: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#007bff',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  typeText: {
    color: '#fff',
    fontSize: 12,
  },
});
