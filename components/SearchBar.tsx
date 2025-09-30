import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleSubmit = () => {
    if (query.trim()) {
      navigation.navigate('SearchResults', { query: query.trim() });
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#777" />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
});
