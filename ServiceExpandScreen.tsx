import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SearchBar from './components/SearchBar';
import ImageSlider from './components/ImageSlider';
import ServicesGrid from './components/ServicesGrid';
import SectionBox from './components/SectionBox';

const ServiceExpandScreen: React.FC = () => {
  const handleSectionPress = (section: string, index: number) => {
    console.log(`${section} pressed, image index:`, index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <SafeAreaView style={styles.topBar}>
        {/* Left: Logo + Name */}
        <View style={styles.leftBox}>
          <Image
            source={require('./assets/images/easyparlour.png')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>EASY PARLOUR</Text>
            <Text style={styles.subtitle}>Parlour at your any location</Text>
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Right: Location */}
        <View style={styles.locationBox}>
          <Ionicons
            name="location-outline"
            size={40}
            color="#555"
            style={{ marginRight: 0, height: '100%' }}
          />
          <View>
            <Text style={styles.nameText}>Name</Text>
            <Text style={styles.locationText}>Bashundhara, Dhaka-1210</Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Search Bar with Menu Icon */}
      <View style={styles.searchRow}>
        <View style={{ flex: 1 }}>
          <SearchBar />
        </View>
        <TouchableOpacity style={styles.menuBtn}>
          <MaterialIcons name="menu" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Slider */}
      <ImageSlider />

      {/* Services Grid */}
      <Text style={styles.heading}>Services</Text>
      <ServicesGrid columns={3} />

      {/* Sections */}
      <Text style={styles.heading}>Near Me</Text>
      <SectionBox
        images={[
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6wBUwH_QnLGfWOxJTI_Qpt31vsX6z4eO6Q&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdGJuRxUaEOPUgNL-xQln7wqR5y3EV1OWiA&s',
          'https://picsum.photos/400/200?random=2',
        ]}
        onPress={(index: number) => handleSectionPress('Near Me', index)}
      />

      <Text style={styles.heading}>Popular</Text>
      <SectionBox
        images={[
          'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2025/01/12/rouge_makeover_studio_.png',
          'https://content.jdmagicbox.com/comp/def_content/salons/default-salons-4.jpg',
          'https://images.pexels.com/photos/6954845/pexels-photo-6954845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ]}
        onPress={(index: number) => handleSectionPress('Popular', index)}
      />

      <Text style={styles.heading}>Offers</Text>
      <SectionBox
        images={[
          'https://img.freepik.com/free-psd/special-offer-creative-sale-banner-design_47987-13883.jpg?semt=ais_hybrid&w=740&q=80',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFo0gh_ZGUhLnUU_g5xV1oF1x2ZIYIclkKSA&s',
          'https://picsum.photos/400/200?random=6',
        ]}
        onPress={(index: number) => handleSectionPress('Offers', index)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 12, color: 'gray' },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#ddd',
    margin: 3,
  },

  locationBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    flexShrink: 1,
  },

  nameText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },

  locationText: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    flexWrap: 'wrap',
    flexShrink: 1,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  menuBtn: {
    marginLeft: 10,
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },

  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
    marginVertical: 10,
  },
});

export default ServiceExpandScreen;
