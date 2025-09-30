import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// --- Types ---
type RootStackParamList = {
  SearchResults: { query?: string };
  ParlourProfile: { parlour: SearchResult };
};

type SearchResultsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SearchResults'
>;

type SearchResultsRouteProp = RouteProp<RootStackParamList, 'SearchResults'>;

type SearchResult = {
  id: string;
  title: string;
  badge?: string | null;
  services: string;
  address: string;
  details: string;
  rating: number;
  reviews: string;
  image: ImageSourcePropType;
};

// --- Sample Data ---
const searchResultsData: SearchResult[] = [
  {
    id: '1',
    title: 'ABC Beauty Parlour',
    badge: 'Best Selling',
    services: 'Haircut | Facial | Waxing',
    address: '123 George Street, Parramatta, Sydney, Australia',
    details: '25-30 mins - 4km - Home Service, Parlour Service',
    rating: 4.75,
    reviews: '1K+ Reviews',
    image: require('../assets/images/salon1.jpeg'),
  },
  {
    id: '2',
    title: 'DEF Beauty Parlour',
    badge: 'Recommended',
    services: 'Haircut | Facial | Waxing | Massage',
    address: '123 George Street, Parramatta, Sydney, Australia',
    details: '25-30 mins - 4km - Home Service, Parlour Service',
    rating: 4.75,
    reviews: '1K+ Reviews',
    image: require('../assets/images/salon2.jpeg'),
  },
  {
    id: '3',
    title: 'GHI Beauty Parlour',
    badge: null,
    services: 'Haircut | Facial | Massage',
    address: '123 George Street, Parramatta, Sydney, Australia',
    details: '25-30 mins - 4km - Home Service, Parlour Service',
    rating: 4.75,
    reviews: '1K+ Reviews',
    image: require('../assets/images/salon3.jpeg'),
  },
];

// --- Component ---
const SearchResultsScreen: React.FC = () => {
  const navigation = useNavigation<SearchResultsNavigationProp>();
  const route = useRoute<SearchResultsRouteProp>();

  const [searchQuery, setSearchQuery] = useState(route.params?.query || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (searchQuery) performSearch(searchQuery);
  }, [searchQuery]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const shareBusiness = (business: SearchResult) => {
    Alert.alert(`Sharing ${business.title}`);
  };

  const performSearch = (query: string) => {
    setLoading(true);
    setTimeout(() => {
      const filteredResults = searchResultsData.filter(
        item =>
          item.services.toLowerCase().includes(query.toLowerCase()) ||
          item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filteredResults);
      setLoading(false);
    }, 500);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) performSearch(searchQuery);
  };

  const renderSearchItem = ({ item }: { item: SearchResult }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ParlourProfile', { parlour: item })}
    >
      <View style={styles.resultItem}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.resultImage} />

          <View style={styles.ratingBadge}>
            <FontAwesome name="star" size={12} color="#FFD700" />
            <Text style={styles.ratingText}>
              {item.rating} ({item.reviews})
            </Text>
          </View>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item.id)}
          >
            <Icon
              name={favorites[item.id] ? 'heart' : 'heart-outline'}
              size={24}
              color={favorites[item.id] ? '#E91E63' : '#fff'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.resultContent}>
          <Text style={styles.title}>{item.title}</Text>
          {item.badge && <Text style={styles.badge}>{item.badge}</Text>}
          <Text style={styles.services}>{item.services}</Text>

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => shareBusiness(item)}
          >
            <Icon name="share-social-outline" size={20} color="#555" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={14} color="#666" />
            <Text style={styles.address}> {item.address}</Text>
          </View>

          <View style={styles.detailRow}>
            <Icon name="time-outline" size={14} color="#666" />
            <Text style={styles.details}> {item.details}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Icon
            name="search-outline"
            size={20}
            color="#777"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearchSubmit}
            autoFocus
          />
        </View>
      </View>

      <View style={styles.resultsCountContainer}>
        <Text style={styles.resultsCountText}>Results for "{searchQuery}"</Text>
        <Text style={styles.resultsCount}>{results.length} results</Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          renderItem={renderSearchItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  resultsCountContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultsCountText: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  resultsCount: { fontSize: 14, color: '#666' },
  resultsList: { padding: 16 },
  resultItem: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: { position: 'relative' },
  resultImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  ratingBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    borderRadius: 20,
    padding: 6,
  },
  favoriteButton: {
    position: 'absolute',
    top: 50,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 6,
  },
  resultContent: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  badge: { fontSize: 14, fontWeight: '600', color: '#E91E63', marginBottom: 8 },
  services: { fontSize: 14, color: '#333', marginBottom: 12 },
  divider: { height: 1, backgroundColor: '#eee', marginBottom: 12 },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  address: { fontSize: 12, color: '#666' },
  details: { fontSize: 12, color: '#666' },
  ratingText: { fontSize: 12, color: '#666', fontWeight: '500' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { fontSize: 16, color: '#666' },
});

export default SearchResultsScreen;
