// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import SearchBar from '../components/SearchBar';
// import { useCart } from '../components/CartContext';

// export default function CheckoutScreen({ navigation }) {
//   const { cartItems } = useCart();
//   // const navigation = useNavigation();
//   const route = useRoute();
//   const { profile, service } = route.params || {};

//   const [quantity, setQuantity] = useState(service?.quantity || 1);

//   const increaseQty = () => setQuantity(prev => prev + 1);
//   const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

//   const subtotal = (service?.productPrice || 0) * quantity;
//   const total = subtotal + (service?.serviceCharge || 0);

//   const today = new Date();
//   const dateStr = today.toLocaleDateString();
//   const timeStr = today.toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Top Bar */}
//         <View style={styles.topBar}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.title}>Booking Review</Text>
//         </View>
//         {/* SearchBar */}
//         <SearchBar />

//         {/* Delivered Address */}
//         <View style={styles.addressCard}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.addressTitle}>
//               Delivered To: {profile?.name || 'User'}
//             </Text>
//             <Text>{profile?.address || 'No Address Added'}</Text>
//             <Text>Phone: {profile?.phone || 'N/A'}</Text>
//           </View>
//           <TouchableOpacity>
//             <Text style={styles.changeBtn}>Change</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Service Details */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Order Details</Text>

//           <View style={styles.itemRow}>
//             <Image
//               source={{ uri: 'https://via.placeholder.com/80' }}
//               style={styles.itemImg}
//             />
//             <View style={{ flex: 1, marginLeft: 10 }}>
//               <Text style={styles.itemName}>{service?.name}</Text>
//               <Text>Product Price: ${service?.productPrice}</Text>
//               <Text>Service Charge: ${service?.serviceCharge}</Text>

//               {/* Quantity with + - buttons */}
//               <View style={styles.qtyRow}>
//                 <TouchableOpacity onPress={decreaseQty} style={styles.qtyBtn}>
//                   <Text style={styles.qtyText}>-</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.qtyValue}>{quantity}</Text>
//                 <TouchableOpacity onPress={increaseQty} style={styles.qtyBtn}>
//                   <Text style={styles.qtyText}>+</Text>
//                 </TouchableOpacity>
//               </View>

//               <Text style={styles.total}>Subtotal: ${subtotal}</Text>
//               <Text style={styles.total}>Total: ${total}</Text>
//             </View>
//           </View>
//         </View>
//         {/* Item Info */}

//         {/* <View style={styles.itemCard}>
//           <Text style={styles.itemTitle}>
//             {service?.name || 'Service Name'}
//           </Text>
//           <View style={styles.row}>
//             <Text>Product: ${service?.productPrice || 0}</Text>
//             <Text>Service: ${service?.servicePrice || 0}</Text>
//           </View>
//           <Text>Expert: {service?.expert || 'Not Assigned'}</Text>
//           <Text>
//             {dateStr} | {timeStr}
//           </Text>
//           {service?.image && (
//             <Image source={{ uri: service.image }} style={styles.itemImg} />
//           )}
//         </View> */}

//         {/* Date & Time */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Date & Time</Text>
//           <Text>{dateStr}</Text>
//           <Text>{timeStr}</Text>
//         </View>

//         {/* Suggested Services */}
//         <Text style={styles.sectionTitle}>Most popular & order</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {['Gold Facial', 'Hair Spa', 'Nail Art'].map((item, i) => (
//             <TouchableOpacity key={i} style={styles.suggestCard}>
//               <Text>{item}</Text>
//               <TouchableOpacity style={styles.addBtn}>
//                 <Text>Add</Text>
//               </TouchableOpacity>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* Fees Section */}
//         <View style={styles.feesSection}>
//           <Text>Platform Fees</Text>
//           <Text>$5</Text>
//         </View>
//         <View style={styles.feesSection}>
//           <Text>VAT & Taxes</Text>
//           <Text>$10</Text>
//         </View>
//         <View style={styles.feesSection}>
//           <Text>Delivery Fees</Text>
//           <Text>$5</Text>
//         </View>

//         {/* Discount Section */}
//         <View style={styles.discountRow}>
//           <TouchableOpacity style={styles.discountBtn}>
//             <Text>Apply a Voucher</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.discountBtn}>
//             <Text>Redeem Points</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Subtotal */}
//         <View style={styles.subtotal}>
//           <Text style={{ fontWeight: '600' }}>
//             Sub Total (incl. fees & tax)
//           </Text>
//           <Text style={{ fontWeight: '700' }}>
//             ${(service?.productPrice || 0) + (service?.servicePrice || 0) + 20}
//           </Text>
//         </View>

//         {/* Review Payment */}
//         <TouchableOpacity style={styles.reviewBtn}>
//           <Text style={styles.reviewText}>Review Payment</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },

//   topBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//   },
//   section: {
//     marginBottom: 20,
//     padding: 12,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//   },
//   title: { flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 },
//   itemRow: { flexDirection: 'row', alignItems: 'center' },
//   addressCard: {
//     backgroundColor: '#fdfdfd',
//     padding: 14,
//     margin: 12,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   addressTitle: { fontWeight: '600', marginBottom: 4 },
//   changeBtn: { color: 'blue', fontWeight: '600' },
//   itemCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     margin: 12,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   itemTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   itemImg: { width: '100%', height: 120, borderRadius: 8, marginTop: 10 },
//   sectionTitle: { margin: 12, fontWeight: '600' },
//   suggestCard: {
//     backgroundColor: '#f8f8f8',
//     padding: 12,
//     borderRadius: 10,
//     marginHorizontal: 8,
//     alignItems: 'center',
//   },
//   addBtn: {
//     marginTop: 6,
//     backgroundColor: '#ddd',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   feesSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 14,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   discountRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 14,
//   },
//   discountBtn: {
//     borderWidth: 1,
//     borderColor: '#333',
//     borderRadius: 6,
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//   },
//   subtotal: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fafafa',
//   },
//   reviewBtn: {
//     margin: 16,
//     backgroundColor: 'black',
//     padding: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   reviewText: { color: 'white', fontWeight: '600', fontSize: 16 },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import SearchBar from '../components/SearchBar';
// import { useCart } from '../components/CartContext';

// export default function CheckoutScreen({ navigation }) {
//   const { cartItems } = useCart();
//   const route = useRoute();
//   const { profile, service } = route.params || {};

//   const [quantity, setQuantity] = useState(service?.quantity || 1);

//   const increaseQty = () => setQuantity(prev => prev + 1);
//   const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

//   // Calculate prices properly
//   const productPrice = service?.productPrice || 0;
//   const serviceCharge = service?.serviceCharge || 0;

//   const subtotal = (productPrice + serviceCharge) * quantity;
//   const platformFee = 5;
//   const vatTax = 10;
//   const deliveryFee = 5;
//   const total = subtotal + platformFee + vatTax + deliveryFee;

//   const today = new Date();
//   const dateStr = today.toLocaleDateString();
//   const timeStr = today.toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Top Bar */}
//         <View style={styles.topBar}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.title}>Booking Review</Text>
//         </View>
//         {/* SearchBar */}
//         <SearchBar />

//         {/* Delivered Address */}
//         <View style={styles.addressCard}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.addressTitle}>
//               Delivered To: {profile?.name || 'User'}
//             </Text>
//             <Text>{profile?.address || 'No Address Added'}</Text>
//             <Text>Phone: {profile?.phone || 'N/A'}</Text>
//           </View>
//           <TouchableOpacity>
//             <Text style={styles.changeBtn}>Change</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Service Details */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Order Details</Text>

//           <View style={styles.itemRow}>
//             <Image
//               source={{ uri: 'https://via.placeholder.com/80' }}
//               style={styles.itemImg}
//             />
//             <View style={{ flex: 1, marginLeft: 10 }}>
//               <Text style={styles.itemName}>{service?.name}</Text>
//               <Text>Product Price: ${productPrice}</Text>
//               <Text>Service Charge: ${serviceCharge}</Text>

//               {/* Quantity with + - buttons */}
//               <View style={styles.qtyRow}>
//                 <TouchableOpacity onPress={decreaseQty} style={styles.qtyBtn}>
//                   <Text style={styles.qtyText}>-</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.qtyValue}>{quantity}</Text>
//                 <TouchableOpacity onPress={increaseQty} style={styles.qtyBtn}>
//                   <Text style={styles.qtyText}>+</Text>
//                 </TouchableOpacity>
//               </View>

//               <Text style={styles.total}>Subtotal: ${subtotal}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Date & Time */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Date & Time</Text>
//           <Text>{dateStr}</Text>
//           <Text>{timeStr}</Text>
//         </View>

//         {/* Suggested Services */}
//         <Text style={styles.sectionTitle}>Most popular & order</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {['Gold Facial', 'Hair Spa', 'Nail Art'].map((item, i) => (
//             <TouchableOpacity key={i} style={styles.suggestCard}>
//               <Text>{item}</Text>
//               <TouchableOpacity style={styles.addBtn}>
//                 <Text>Add</Text>
//               </TouchableOpacity>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* Fees Section */}
//         <View style={styles.feesSection}>
//           <Text>Platform Fees</Text>
//           <Text>${platformFee}</Text>
//         </View>
//         <View style={styles.feesSection}>
//           <Text>VAT & Taxes</Text>
//           <Text>${vatTax}</Text>
//         </View>
//         <View style={styles.feesSection}>
//           <Text>Delivery Fees</Text>
//           <Text>${deliveryFee}</Text>
//         </View>

//         {/* Discount Section */}
//         <View style={styles.discountRow}>
//           <TouchableOpacity style={styles.discountBtn}>
//             <Text>Apply a Voucher</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.discountBtn}>
//             <Text>Redeem Points</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Subtotal */}
//         <View style={styles.subtotal}>
//           <Text style={{ fontWeight: '600' }}>
//             Sub Total (incl. fees & tax)
//           </Text>
//           <Text style={{ fontWeight: '700' }}>${total}</Text>
//         </View>

//         {/* Review Payment */}
//         <TouchableOpacity style={styles.reviewBtn}>
//           <Text style={styles.reviewText}>Review Payment</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   topBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//   },
//   section: {
//     marginBottom: 20,
//     padding: 12,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//   },
//   title: { flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 },
//   itemRow: { flexDirection: 'row', alignItems: 'center' },
//   addressCard: {
//     backgroundColor: '#fdfdfd',
//     padding: 14,
//     margin: 12,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   addressTitle: { fontWeight: '600', marginBottom: 4 },
//   changeBtn: { color: 'blue', fontWeight: '600' },
//   itemCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     margin: 12,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   itemTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   itemImg: { width: '100%', height: 120, borderRadius: 8, marginTop: 10 },
//   sectionTitle: { margin: 12, fontWeight: '600' },
//   suggestCard: {
//     backgroundColor: '#f8f8f8',
//     padding: 12,
//     borderRadius: 10,
//     marginHorizontal: 8,
//     alignItems: 'center',
//   },
//   addBtn: {
//     marginTop: 6,
//     backgroundColor: '#ddd',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   feesSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 14,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   discountRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 14,
//   },
//   discountBtn: {
//     borderWidth: 1,
//     borderColor: '#333',
//     borderRadius: 6,
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//   },
//   subtotal: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fafafa',
//   },
//   reviewBtn: {
//     margin: 16,
//     backgroundColor: 'black',
//     padding: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   reviewText: { color: 'white', fontWeight: '600', fontSize: 16 },
//   qtyRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   qtyBtn: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#eee',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 8,
//   },
//   qtyText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   qtyValue: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginHorizontal: 10,
//   },
//   total: {
//     fontWeight: '600',
//     marginTop: 4,
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import { useCart } from '../components/CartContext';

export default function CheckoutScreen({ navigation }) {
  const { cartItems } = useCart();
  const route = useRoute();
  const { profile, service } = route.params || {};

  const [quantity, setQuantity] = useState(service?.quantity || 1);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Calculate prices properly
  const productPrice = service?.productPrice || 0;
  const serviceCharge = service?.serviceCharge || 0;

  const subtotal = (productPrice + serviceCharge) * quantity;
  const platformFee = 5;
  const vatTax = 10;
  const deliveryFee = 5;
  const total = subtotal + platformFee + vatTax + deliveryFee;

  const today = new Date();
  const dateStr = today.toLocaleDateString();
  const timeStr = today.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Debug: Check what data is received
  console.log('Service data:', service);
  console.log('Profile data:', profile);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Booking Review</Text>
        </View>

        {/* SearchBar */}
        <SearchBar />

        {/* Delivered Address */}
        <View style={styles.addressCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.addressTitle}>
              Delivered To: {profile?.name || 'User'}
            </Text>
            <Text>{profile?.address || 'No Address Added'}</Text>
            <Text>Phone: {profile?.phone || 'N/A'}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeBtn}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Service Details - Only show if service exists */}
        {service && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Details</Text>

            <View style={styles.itemRow}>
              <Image
                source={{ uri: 'https://via.placeholder.com/80' }}
                style={styles.itemImg}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.itemName}>{service.name}</Text>
                <Text>Product Price: ${productPrice}</Text>
                <Text>Service Charge: ${serviceCharge}</Text>

                {/* Quantity with + - buttons */}
                <View style={styles.qtyRow}>
                  <TouchableOpacity onPress={decreaseQty} style={styles.qtyBtn}>
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{quantity}</Text>
                  <TouchableOpacity onPress={increaseQty} style={styles.qtyBtn}>
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.total}>Subtotal: ${subtotal}</Text>
              </View>
            </View>
          </View>
        )}

        {/* Date & Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date & Time</Text>
          <Text>{dateStr}</Text>
          <Text>{timeStr}</Text>
        </View>

        {/* Suggested Services */}
        <Text style={styles.sectionTitle}>Most popular & order</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Gold Facial', 'Hair Spa', 'Nail Art'].map((item, i) => (
            <TouchableOpacity key={i} style={styles.suggestCard}>
              <Text>{item}</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text>Add</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Fees Section */}
        <View style={styles.feesSection}>
          <Text>Platform Fees</Text>
          <Text>${platformFee}</Text>
        </View>
        <View style={styles.feesSection}>
          <Text>VAT & Taxes</Text>
          <Text>${vatTax}</Text>
        </View>
        <View style={styles.feesSection}>
          <Text>Delivery Fees</Text>
          <Text>${deliveryFee}</Text>
        </View>

        {/* Discount Section */}
        <View style={styles.discountRow}>
          <TouchableOpacity style={styles.discountBtn}>
            <Text>Apply a Voucher</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.discountBtn}>
            <Text>Redeem Points</Text>
          </TouchableOpacity>
        </View>

        {/* Subtotal */}
        <View style={styles.subtotal}>
          <Text style={{ fontWeight: '600' }}>
            Sub Total (incl. fees & tax)
          </Text>
          <Text style={{ fontWeight: '700' }}>${total}</Text>
        </View>

        {/* Review Payment */}
        <TouchableOpacity style={styles.reviewBtn}>
          <Text style={styles.reviewText}>Review Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressCard: {
    backgroundColor: '#fdfdfd',
    padding: 14,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  addressTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  changeBtn: {
    color: 'blue',
    fontWeight: '600',
  },
  itemImg: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  total: {
    fontWeight: '600',
    marginTop: 5,
    fontSize: 16,
  },
  suggestCard: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  addBtn: {
    marginTop: 6,
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  feesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 14,
  },
  discountBtn: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fafafa',
  },
  reviewBtn: {
    margin: 16,
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  reviewText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
