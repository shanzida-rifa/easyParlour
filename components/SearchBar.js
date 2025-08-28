// import React from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// export default function SearchBar() {
//   return (
//     <View style={styles.container}>
//       <Icon name="search-outline" size={20} color="#777" />
//       <TextInput placeholder="Search" style={styles.input} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#f2f2f2',
//     marginHorizontal: 16,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     alignItems: 'center',
//   },
//   input: {
//     marginLeft: 8,
//     flex: 1,
//   },
// });
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (query.trim()) {
      navigation.navigate('SearchResults', { query: query.trim() });
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={20} color="#777" />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
});
