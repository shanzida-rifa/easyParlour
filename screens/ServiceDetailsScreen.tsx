import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import { useCart } from '../components/CartContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Define your navigation params
type RootStackParamList = {
  ServiceDetails: { service: Service; parlour: Parlour };
  Checkout: { profile: Profile; service: CartItem };
};

type ServiceDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ServiceDetails'
>;

type ServiceDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ServiceDetails'
>;

type Props = {
  navigation: ServiceDetailsScreenNavigationProp;
  route: ServiceDetailsScreenRouteProp;
};

// Define types
type Service = {
  id: string;
  name: string;
  price: number;
  serviceCharge?: number;
  image?: any;
};

type Parlour = {
  id?: string;
  name: string;
  image?: any;
};

type Variation = {
  id: string;
  name: string;
  selected: boolean;
  productPrice: number;
  servicePrice: number;
  productQty: number;
  serviceQty: number;
};

type AddOn = {
  id: string;
  name: string;
  pieces: string;
  price: number;
  selected: boolean;
  qty: number;
};

type Profile = {
  name: string;
  address: string;
  phone: string;
};

type CartItem = {
  id: string;
  name: string;
  productPrice: number;
  servicePrice: number;
  quantity: number;
  price: number;
  parlour: string;
  image?: any;
  variations: { id: string; name: string; price: number }[];
  addons: { id: string; name: string; price: number }[];
};

export default function ServiceDetailsScreen({ route, navigation }: Props) {
  const { addToCart } = useCart();
  const { service, parlour } = route.params;

  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [serviceQuantity, setServiceQuantity] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<'HOME' | 'SALON'>(
    'HOME',
  );
  const [showVariations, setShowVariations] = useState<boolean>(false);
  const [showAddOns, setShowAddOns] = useState<boolean>(false);

  const [variations, setVariations] = useState<Variation[]>([
    {
      id: '1',
      name: 'Face',
      selected: false,
      productPrice: 300,
      servicePrice: 100,
      productQty: 1,
      serviceQty: 1,
    },
    {
      id: '2',
      name: 'Hand',
      selected: false,
      productPrice: 300,
      servicePrice: 100,
      productQty: 1,
      serviceQty: 1,
    },
    {
      id: '3',
      name: 'Fullbody',
      selected: false,
      productPrice: 250,
      servicePrice: 100,
      productQty: 1,
      serviceQty: 1,
    },
  ]);

  const [addOns, setAddOns] = useState<AddOn[]>([
    {
      id: '1',
      name: 'Large Flower',
      pieces: '1pcs',
      price: 100,
      selected: false,
      qty: 1,
    },
    {
      id: '2',
      name: 'small Honey',
      pieces: '1pcs',
      price: 80,
      selected: false,
      qty: 1,
    },
  ]);

  const increaseProductQuantity = () => setProductQuantity(prev => prev + 1);
  const decreaseProductQuantity = () =>
    setProductQuantity(prev => (prev > 1 ? prev - 1 : prev));

  const increaseServiceQuantity = () => setServiceQuantity(prev => prev + 1);
  const decreaseServiceQuantity = () =>
    setServiceQuantity(prev => (prev > 1 ? prev - 1 : prev));

  const toggleVariationSelection = (id: string) => {
    setVariations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const toggleAddOnSelection = (id: string) => {
    setAddOns(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const calculateTotal = (): number => {
    const productTotal = service.price * productQuantity;
    const serviceTotal = 100 * serviceQuantity;

    const variationsTotal = variations.reduce(
      (acc, v) =>
        v.selected
          ? acc +
            (v.productPrice * v.productQty + v.servicePrice * v.serviceQty)
          : acc,
      0,
    );
    const addOnsTotal = addOns.reduce(
      (acc, a) => (a.selected ? acc + a.price * a.qty : acc),
      0,
    );

    return productTotal + serviceTotal + variationsTotal + addOnsTotal;
  };

  const addToCartHandler = () => {
    const selectedVariations = variations
      .filter(v => v.selected)
      .map(v => ({
        id: v.id,
        name: v.name,
        price: v.productPrice * v.productQty + v.servicePrice * v.serviceQty,
      }));

    const selectedAddOns = addOns
      .filter(a => a.selected)
      .map(a => ({ id: a.id, name: a.name, price: a.price * a.qty }));

    const newItem: CartItem = {
      id: service.id,
      name: service.name,
      productPrice: service.price,
      servicePrice: service.serviceCharge || 0,
      quantity: productQuantity + serviceQuantity,
      price: calculateTotal(),
      parlour: parlour.name,
      image: service.image,
      variations: selectedVariations,
      addons: selectedAddOns,
    };

    addToCart(newItem);

    navigation.navigate('Checkout', {
      profile: {
        name: 'Prabir',
        address: 'Bashundhara,Dhaka-1210',
        phone: '01719245215',
      },
      service: newItem,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Service Details</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Bar */}
      <SearchBar />

      <ScrollView>
        {/* Banner */}
        {parlour.image && (
          <Image source={parlour.image} style={styles.banner} />
        )}

        {/* Service Info */}
        <View style={styles.serviceInfo}>
          <View style={styles.serviceHeader}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <View style={styles.iconButtons}>
              {['HOME', 'SALON'].map(option => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.iconButton,
                    selectedOption === option && styles.selectedIconButton,
                  ]}
                  onPress={() => setSelectedOption(option as 'HOME' | 'SALON')}
                >
                  <Icon
                    name={
                      option === 'HOME' ? 'home-outline' : 'business-outline'
                    }
                    size={20}
                    color={selectedOption === option ? '#fff' : '#000'}
                  />
                  <Text
                    style={[
                      styles.iconButtonText,
                      selectedOption === option &&
                        styles.selectedIconButtonText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Text style={styles.serviceDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          {/* Price Section */}
          <View style={styles.priceSection}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Product</Text>
              <View style={styles.priceControl}>
                <View style={styles.priceValues}>
                  <Text style={styles.originalPrice}>${service.price}</Text>
                  <Text style={styles.discountedPrice}>
                    ${service.price + 20}
                  </Text>
                </View>
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    onPress={decreaseProductQuantity}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{productQuantity}</Text>
                  <TouchableOpacity
                    onPress={increaseProductQuantity}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Services</Text>
              <View style={styles.priceControl}>
                <View style={styles.priceValues}>
                  <Text style={styles.originalPrice}>${100}</Text>
                  <Text style={styles.discountedPrice}>
                    ${service.price + 70}
                  </Text>
                </View>
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    onPress={decreaseServiceQuantity}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{serviceQuantity}</Text>
                  <TouchableOpacity
                    onPress={increaseServiceQuantity}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Variations */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => setShowVariations(prev => !prev)}
            >
              <Text style={styles.sectionTitle}>
                Choose Your Service Variations
              </Text>
              <Icon
                name={showVariations ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            {showVariations && (
              <View style={styles.dropdownContent}>
                {variations.map(item => (
                  <View key={item.id} style={styles.tableRow}>
                    <TouchableOpacity
                      onPress={() => toggleVariationSelection(item.id)}
                    >
                      <Icon
                        name={
                          item.selected ? 'checkbox-outline' : 'square-outline'
                        }
                        size={20}
                        color="#000"
                      />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Add-ons */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => setShowAddOns(prev => !prev)}
            >
              <Text style={styles.sectionTitle}>Add-ons</Text>
              <Icon
                name={showAddOns ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            {showAddOns && (
              <View style={styles.dropdownContent}>
                {addOns.map(item => (
                  <View key={item.id} style={styles.addOnRow}>
                    <TouchableOpacity
                      onPress={() => toggleAddOnSelection(item.id)}
                      style={styles.addOnCheckbox}
                    >
                      <Icon
                        name={
                          item.selected ? 'checkbox-outline' : 'square-outline'
                        }
                        size={20}
                        color="#000"
                      />
                    </TouchableOpacity>
                    <Text style={styles.addOnText}>
                      {item.name} {item.pieces}
                    </Text>
                    <Text style={styles.addOnPrice}>{item.price}TK</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Total */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional information</Text>
            <Text style={styles.totalPrice}>${calculateTotal()}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Cart Footer */}
      <View style={styles.cartFooter}>
        <View style={styles.cartInfo}>
          <Text style={styles.itemCount}>
            {productQuantity + serviceQuantity} Item
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={addToCartHandler}
        >
          <Text style={styles.addToCartText}>
            ADD TO CART ${calculateTotal()}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles remain unchanged
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
  serviceInfo: { padding: 16 },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  serviceName: { fontSize: 20, fontWeight: 'bold', flex: 1, marginRight: 10 },
  iconButtons: { flexDirection: 'row' },
  iconButton: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginLeft: 8,
  },
  selectedIconButton: { backgroundColor: '#000', borderColor: '#000' },
  iconButtonText: { fontSize: 12, marginTop: 4, color: '#000' },
  selectedIconButtonText: { color: '#fff' },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  priceSection: { marginBottom: 16 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceLabel: { fontSize: 16, fontWeight: '600', flex: 1 },
  priceControl: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  priceValues: { flexDirection: 'row', alignItems: 'center' },
  originalPrice: { fontSize: 16, fontWeight: '600', marginRight: 8 },
  discountedPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  quantityButtonText: { fontSize: 16, fontWeight: 'bold' },
  quantityText: { marginHorizontal: 8, fontSize: 14, fontWeight: '600' },
  section: { marginBottom: 20 },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  dropdownContent: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: 8,
  },
  tableRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  addOnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  addOnCheckbox: { marginRight: 8 },
  addOnText: { flex: 1, fontSize: 14 },
  addOnPrice: { fontSize: 14, fontWeight: '600', marginRight: 8 },
  totalPrice: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  cartInfo: { flexDirection: 'row', alignItems: 'center' },
  itemCount: { fontSize: 14, fontWeight: '600' },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  addToCartText: { color: '#fff', fontWeight: 'bold' },
});
