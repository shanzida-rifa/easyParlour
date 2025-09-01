import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';

const { width } = Dimensions.get('window');

export default function ParlourProfileScreen({ route, navigation }) {
  const { parlour } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Facial');
  const [cart, setCart] = useState([]);

  const images = [
    parlour.image,
    require('../assets/images/salon2.jpeg'),
    require('../assets/images/salon3.jpeg'),
  ];

  // Service categories
  const categories = [
    'Wax5',
    'Wax6',
    'Haircutting',
    'Facial',
    'Massage',
    'Threading',
  ];

  // Example services for each category
  const categoryServices = {
    Wax5: [
      {
        id: 'w1',
        name: 'Full Body Wax',
        price: 200,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'w2',
        name: 'Leg Wax',
        price: 120,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'w3',
        name: 'Hand Wax',
        price: 100,
        image: require('../assets/images/easyparlour.png'),
      },
    ],
    Wax6: [
      {
        id: 'wx1',
        name: 'Sensitive Wax',
        price: 250,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'wx2',
        name: 'Chocolate Wax',
        price: 200,
        image: require('../assets/images/easyparlour.png'),
      },
    ],
    Haircutting: [
      {
        id: 'h1',
        name: 'Kids Haircut',
        price: 80,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'h2',
        name: 'Men Haircut',
        price: 100,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'h3',
        name: 'Women Haircut',
        price: 150,
        image: require('../assets/images/easyparlour.png'),
      },
    ],
    Facial: [
      {
        id: 'f1',
        name: 'Gold Facial',
        price: 150,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'f2',
        name: 'Diamond Facial',
        price: 180,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'f3',
        name: 'Normal Facial',
        price: 100,
        image: require('../assets/images/easyparlour.png'),
      },
    ],
    Massage: [
      {
        id: 'm1',
        name: 'Full Body Massage',
        price: 300,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 'm2',
        name: 'Head Massage',
        price: 120,
        image: require('../assets/images/easyparlour.png'),
      },
    ],
    Threading: [
      {
        id: 't1',
        name: 'Eyebrow Threading',
        price: 50,
        image: require('../assets/images/easyparlour.png'),
      },
      {
        id: 't2',
        name: 'Full Face Threading',
        price: 100,
        image: require('../assets/images/easyparlour.png'),
      },
    ],
  };

  // Generic services (bottom section)
  const services = [
    {
      id: '1',
      name: 'Haircut',
      price: 100,
      image: require('../assets/images/easyparlour.png'),
    },
    {
      id: '2',
      name: 'Gold Facial',
      price: 150,
      image: require('../assets/images/easyparlour.png'),
    },
    {
      id: '3',
      name: 'Waxing',
      price: 120,
      image: require('../assets/images/easyparlour.png'),
    },
  ];

  const addToCart = service => {
    setCart([...cart, service]);
  };

  const renderCategoryCard = ({ item }) => (
    <View style={styles.categoryCard}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.servicePrice}>${item.price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );

  const renderService = ({ item }) => (
    <View style={styles.serviceCard}>
      <Image source={item.image} style={styles.serviceImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.servicePrice}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{parlour.title}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Bar */}
      <SearchBar />
      <View style={{ marginTop: 5 }}></View>

      <ScrollView>
        {/* Image Slider */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const slide = Math.round(e.nativeEvent.contentOffset.x / width);
            setActiveIndex(slide);
          }}
          scrollEventThrottle={16}
        >
          {images.map((img, index) => (
            <Image key={index} source={img} style={styles.banner} />
          ))}
        </ScrollView>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        {/* Parlour Info */}
        <View style={styles.infoSection}>
          <View>
            <Text style={styles.title}>{parlour.title}</Text>
            <Text style={styles.subtitle}>{parlour.services}</Text>
            <View style={styles.ratingRow}>
              <Icon name="star" size={18} color="#FFD700" />
              <Text style={styles.ratingText}>
                {parlour.rating} ({parlour.reviews})
              </Text>
            </View>
            <Text style={styles.address}>{parlour.address}</Text>
            <Text style={styles.details}>{parlour.details}</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="home-outline" size={20} color="#000" />
              <Text style={styles.buttonText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="storefront-outline" size={20} color="#000" />
              <Text style={styles.buttonText}>SHOP</Text>
            </TouchableOpacity>
          </View>

          {/* Ask Questions */}
          <TouchableOpacity style={styles.askButton}>
            <Text style={styles.askButtonText}>Ask Questions</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryTabs}
        >
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryTab,
                selectedCategory === cat && styles.activeCategory,
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.activeCategoryText,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Category Services */}
        <FlatList
          data={categoryServices[selectedCategory]}
          renderItem={renderCategoryCard}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={styles.categoryList}
        />

        {/* Bottom Services */}
        <View style={styles.services}>
          <Text style={styles.servicesTitle}>Services</Text>
          <FlatList
            data={services}
            renderItem={renderService}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerTitle: { fontSize: 16, fontWeight: 'bold' },
  banner: { width: width, height: 200, resizeMode: 'cover' },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  infoSection: {
    flexDirection: 'row',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
  },
  address: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
  },
  details: {
    fontSize: 12,
    color: '#777',
    marginBottom: 12,
  },
  buttonRow: { flexDirection: 'row', marginBottom: 12 },
  iconButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
  },
  buttonText: {
    marginLeft: 4,
    fontSize: 14,
  },

  askButton: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 10,
    alignSelf: 'flex-start',
  },
  askButtonText: { fontSize: 14 },

  // Categories
  categoryTabs: { paddingHorizontal: 8, marginVertical: 10 },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    // borderWidth: 1,
    borderColor: '#ccc',
    // borderRadius: 20,
    marginRight: 10,
  },
  activeCategory: {
    // backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#000',
  },
  categoryText: {
    fontSize: 14,
    color: '#000',
  },
  activeCategoryText: {
    color: '#000',
  },

  categoryList: { paddingHorizontal: 10, paddingBottom: 20 },
  categoryCard: {
    flex: 1,
    margin: 6,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  categoryImage: { width: 70, height: 70, borderRadius: 8, marginBottom: 6 },

  // Services bottom
  services: { padding: 16 },
  servicesTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  serviceImage: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  serviceName: { fontSize: 16, fontWeight: '600' },
  servicePrice: { fontSize: 14, color: '#000', marginVertical: 4 },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'center',
  },
  addButtonText: { color: '#fff' },
});
