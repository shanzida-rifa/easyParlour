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
import UserProfileScreen from './UserProfileScreen';

const { width } = Dimensions.get('window');

export default function ServiceDetailsScreen({ route, navigation }) {
  const { addToCart } = useCart();
  const { service, parlour } = route.params;
  const [productQuantity, setProductQuantity] = useState(1);
  const [serviceQuantity, setServiceQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('HOME');
  const [showVariations, setShowVariations] = useState(false);
  const [showAddOns, setShowAddOns] = useState(false);

  // Variation options with quantities
  const [variations, setVariations] = useState([
    {
      id: '1',
      name: 'Face',
      selected: false,
      productPrice: 300,
      servicePrice: 400,
      productQty: 1,
      serviceQty: 1,
    },
    {
      id: '2',
      name: 'Hand',
      selected: false,
      productPrice: 300,
      servicePrice: 400,
      productQty: 1,
      serviceQty: 1,
    },
    {
      id: '3',
      name: 'Fullbody',
      selected: false,
      productPrice: 250,
      servicePrice: 300,
      productQty: 1,
      serviceQty: 1,
    },
  ]);

  // Add-ons options
  const [addOns, setAddOns] = useState([
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

  const increaseProductQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decreaseProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const increaseServiceQuantity = () => {
    setServiceQuantity(serviceQuantity + 1);
  };

  const decreaseServiceQuantity = () => {
    if (serviceQuantity > 1) {
      setServiceQuantity(serviceQuantity - 1);
    }
  };

  const toggleVariationSelection = id => {
    setVariations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const increaseVariationProductQty = id => {
    setVariations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, productQty: item.productQty + 1 } : item,
      ),
    );
  };

  const decreaseVariationProductQty = id => {
    setVariations(prev =>
      prev.map(item =>
        item.id === id && item.productQty > 1
          ? { ...item, productQty: item.productQty - 1 }
          : item,
      ),
    );
  };

  const increaseVariationServiceQty = id => {
    setVariations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, serviceQty: item.serviceQty + 1 } : item,
      ),
    );
  };

  const addToCartHandler = () => {
    const newItem = {
      id: service.id,
      name: service.name,
      productPrice: service.price, // Base product price
      servicePrice: service.price + 50, // Service price (example)
      quantity: productQuantity + serviceQuantity,
      price: calculateTotal(),
      parlour: parlour.name,
      image: service.image,
    };
    addToCart(newItem);
    navigation.navigate('Checkout', {
      profile: {
        name: 'Prabir', // Replace with user data from profile context / API
        address: 'Bashundhara,Dhaka-1210',
        phone: '01719245215',
      },
      service: newItem,
      // service: {
      //   id: service.id,
      //   name: service.name,
      //   productPrice: service.price,
      //   serviceCharge: 50, // fixed service charge
      //   image: service.image || null,
      //   quantity: 1, // default
      // },
    });
  };

  const decreaseVariationServiceQty = id => {
    setVariations(prev =>
      prev.map(item =>
        item.id === id && item.serviceQty > 1
          ? { ...item, serviceQty: item.serviceQty - 1 }
          : item,
      ),
    );
  };

  const toggleAddOnSelection = id => {
    setAddOns(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const increaseAddOnQty = id => {
    setAddOns(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseAddOnQty = id => {
    setAddOns(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  const calculateTotal = () => {
    // Base product and service prices
    const productTotal = service.price * productQuantity;
    const serviceTotal = (service.price + 50) * serviceQuantity;

    // Add variations
    let variationsTotal = 0;
    variations.forEach(variation => {
      if (variation.selected) {
        variationsTotal +=
          variation.productPrice * variation.productQty +
          variation.servicePrice * variation.serviceQty;
      }
    });

    // Add add-ons
    let addOnsTotal = 0;
    addOns.forEach(addOn => {
      if (addOn.selected) {
        addOnsTotal += addOn.price * addOn.qty;
      }
    });

    return productTotal + serviceTotal + variationsTotal + addOnsTotal;
  };

  // const addToCart = () => {
  //   // Add to cart logic here
  //   navigation.goBack();
  // };

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
        {/* Banner Image */}
        <Image source={parlour.image} style={styles.banner} />

        {/* Service Info */}
        <View style={styles.serviceInfo}>
          {/* <Text style={styles.categoryTitle}>SUB-CATEGORY</Text> */}

          {/* Service Name with Icons */}
          <View style={styles.serviceHeader}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <View style={styles.iconButtons}>
              <TouchableOpacity
                style={[
                  styles.iconButton,
                  selectedOption === 'HOME' && styles.selectedIconButton,
                ]}
                onPress={() => setSelectedOption('HOME')}
              >
                <Icon
                  name="home-outline"
                  size={20}
                  color={selectedOption === 'HOME' ? '#fff' : '#000'}
                />
                <Text
                  style={[
                    styles.iconButtonText,
                    selectedOption === 'HOME' && styles.selectedIconButtonText,
                  ]}
                >
                  HOME
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.iconButton,
                  selectedOption === 'SALON' && styles.selectedIconButton,
                ]}
                onPress={() => setSelectedOption('SALON')}
              >
                <Icon
                  name="business-outline"
                  size={20}
                  color={selectedOption === 'SALON' ? '#fff' : '#000'}
                />
                <Text
                  style={[
                    styles.iconButtonText,
                    selectedOption === 'SALON' && styles.selectedIconButtonText,
                  ]}
                >
                  SALON
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.serviceDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          {/* Price Section with Quantity Controls */}
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
                  <Text style={styles.originalPrice}>
                    ${service.price + 50}
                  </Text>
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

          {/* Variations Section with Dropdown */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => setShowVariations(!showVariations)}
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
                {/* Table Header */}
                <View style={styles.tableHeader}>
                  <View style={[styles.tableCol, { flex: 0.5 }]}></View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableHeaderText}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableHeaderText}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableHeaderText}></Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableHeaderText}>Product</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableHeaderText}>Service</Text>
                  </View>
                </View>

                {/* Table Rows */}
                {variations.map(item => (
                  <View key={item.id} style={styles.tableRow}>
                    <View style={[styles.tableCol, { flex: 0.5 }]}>
                      <TouchableOpacity
                        onPress={() => toggleVariationSelection(item.id)}
                      >
                        <Icon
                          name={
                            item.selected
                              ? 'checkbox-outline'
                              : 'square-outline'
                          }
                          size={20}
                          color="#000"
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.tableCol}>
                      <Text>{item.name === 'Hand' ? 'Hand' : 'Face'}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text>{item.name === 'Hand' ? 'Hand' : ''}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text>1pcs</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <View style={styles.variationQtyControl}>
                        <Text>{item.productPrice}TK</Text>
                        <View style={styles.variationQtyButtons}>
                          {/* <TouchableOpacity
                            onPress={() => decreaseVariationProductQty(item.id)}
                            style={styles.smallQtyButton}
                          >
                            <Text style={styles.smallQtyButtonText}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.smallQtyText}>
                            {item.productQty}
                          </Text>
                          <TouchableOpacity
                            onPress={() => increaseVariationProductQty(item.id)}
                            style={styles.smallQtyButton}
                          >
                            <Text style={styles.smallQtyButtonText}>+</Text>
                          </TouchableOpacity> */}
                        </View>
                      </View>
                    </View>
                    <View style={styles.tableCol}>
                      <View style={styles.variationQtyControl}>
                        <Text>{item.servicePrice} TK</Text>
                        <View style={styles.variationQtyButtons}>
                          {/* <TouchableOpacity
                            onPress={() => decreaseVariationServiceQty(item.id)}
                            style={styles.smallQtyButton}
                          >
                            <Text style={styles.smallQtyButtonText}>-</Text>
                          </TouchableOpacity> */}
                          {/* <Text style={styles.smallQtyText}>
                            {item.serviceQty}
                          </Text> */}
                          {/* <TouchableOpacity
                            onPress={() => increaseVariationServiceQty(item.id)}
                            style={styles.smallQtyButton}
                          >
                            <Text style={styles.smallQtyButtonText}>+</Text>
                          </TouchableOpacity> */}
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Add-ons Section with Dropdown */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => setShowAddOns(!showAddOns)}
            >
              <Text style={styles.sectionTitle}>Ad-ons</Text>
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
                    <View style={styles.addOnQtyControl}>
                      {/* <TouchableOpacity
                        onPress={() => decreaseAddOnQty(item.id)}
                        style={styles.smallQtyButton}
                      >
                        <Text style={styles.smallQtyButtonText}>-</Text>
                      </TouchableOpacity> */}
                      {/* <Text style={styles.smallQtyText}>{item.qty}</Text> */}
                      {/* <TouchableOpacity
                        onPress={() => increaseAddOnQty(item.id)}
                        style={styles.smallQtyButton}
                      >
                        <Text style={styles.smallQtyButtonText}>+</Text>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Additional Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional information</Text>
            <Text style={styles.totalPrice}>${calculateTotal()}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Cart Section */}
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
  categoryTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  iconButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginLeft: 8,
  },
  selectedIconButton: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  iconButtonText: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
  },
  selectedIconButtonText: {
    color: '#fff',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  priceSection: {
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  priceControl: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  priceValues: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
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
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownContent: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  tableCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  variationQtyControl: {
    alignItems: 'center',
  },
  variationQtyButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  smallQtyButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  smallQtyButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  smallQtyText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  addOnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  addOnCheckbox: {
    marginRight: 8,
  },
  addOnText: {
    flex: 1,
    fontSize: 14,
  },
  addOnPrice: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  addOnQtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCount: {
    fontSize: 14,
    fontWeight: '600',
  },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
