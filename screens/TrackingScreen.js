// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Modal,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaskedView from '@react-native-masked-view/masked-view';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import SearchBar from '../components/SearchBar'; // ✅ Import your SearchBar

// export default function TrackingScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { profile, total, paymentMethod = 'Cash' } = route.params || {};

//   const [showEmergency, setShowEmergency] = useState(false);

//   // Generate random invoice number
//   const invoiceNo = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
//   const now = new Date();
//   const timeStr = now.toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//   });
//   const dateStr = now.toLocaleDateString();

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* ✅ Search Bar at the top */}
//       <SearchBar />

//       <ScrollView>
//         {/* Top Bar */}
//         <View style={styles.topBar}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.title}>My Booking Orders</Text>
//         </View>

//         {/* Order Card */}
//         <View style={styles.card}>
//           <View style={styles.rowBetween}>
//             <Text style={styles.name}>Delivered To: {profile?.name}</Text>
//             <TouchableOpacity>
//               <Text style={styles.changeBtn}>Change</Text>
//             </TouchableOpacity>
//           </View>
//           <Text>{profile?.address}</Text>
//           <Text>Phone: {profile?.phone}</Text>

//           <Text style={styles.orderId}>
//             ID: {Math.floor(Math.random() * 999999)}
//           </Text>
//           <Text>
//             {dateStr} | Time {timeStr}
//           </Text>

//           <View style={styles.rowBetween}>
//             <Text style={styles.paymentText}>{paymentMethod} :</Text>
//             <Text style={styles.amount}>${total}</Text>
//           </View>

//           <Text style={styles.invoice}>Invoice no: {invoiceNo}</Text>

//           {/* Actions */}
//           <View style={styles.actions}>
//             <TouchableOpacity style={styles.btnLight}>
//               <Text>Live Chat</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.btnLight}>
//               <Text>Approved</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Tracking Updates */}
//         <View style={styles.section}>
//           <View style={styles.rowBetween}>
//             <Text style={styles.sectionTitle}>Tracking Updates</Text>
//             <Text style={{ color: 'gray' }}>Change/Stop</Text>
//           </View>

//           {[
//             { status: 'Consign has been made', time: '05:30' },
//             { status: 'Processing...', time: '06:10' },
//             { status: 'On the way', time: '06:30' },
//             { status: 'Pending', time: '07:10' },
//             { status: 'Done', time: '07:30' },
//           ].map((item, i) => (
//             <View key={i} style={styles.timelineItem}>
//               <Ionicons
//                 name="checkmark-circle"
//                 size={20}
//                 color={i < 3 ? 'black' : 'lightgray'}
//               />
//               <View style={{ marginLeft: 8 }}>
//                 <Text>{item.status}</Text>
//                 <Text style={styles.time}>
//                   {dateStr} | Time {item.time}
//                 </Text>
//               </View>
//             </View>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Floating Emergency Button */}
//       {/* <TouchableOpacity
//         style={styles.fab}
//         onPress={() => setShowEmergency(true)}
//       >
//         <Ionicons name="shield-checkmark" size={28} color="white" />
//       </TouchableOpacity> */}

//       {/* <TouchableOpacity
//         onPress={() => setShowEmergency(true)}
//         style={styles.fabWrapper}
//       >
//         <View style={styles.fabBorder}>
//           <LinearGradient
//             colors={['#4facfe', '#00f2fe']} // bluish gradient
//             style={styles.fab}
//           >
//             <Ionicons name="shield" size={28} color="white" />
//           </LinearGradient>
//         </View>
//       </TouchableOpacity> */}

//       <TouchableOpacity
//         onPress={() => setShowEmergency(true)}
//         style={styles.fabWrapper}
//       >
//         <View style={styles.fabBorder}>
//           <LinearGradient
//             colors={['#4facfe', '#00f2fe']} // outer bluish gradient circle
//             style={styles.fab}
//           >
//             {/* Shield Icon with reddish vibe */}
//             <Ionicons name="shield" size={32} color="#ff4b5c" />
//           </LinearGradient>
//         </View>
//       </TouchableOpacity>

//       {/* Emergency Popup */}
//       <Modal
//         visible={showEmergency}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setShowEmergency(false)}
//       >
//         <View style={styles.popupOverlay}>
//           <View style={styles.popup}>
//             <Text style={styles.popupTitle}>Emergency Contact</Text>

//             <TouchableOpacity style={styles.popupBtn}>
//               <Ionicons name="call" size={20} color="black" />
//               <Text style={styles.popupText}>Get Help from 000</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.popupBtn}>
//               <Ionicons name="shield" size={20} color="black" />
//               <Text style={styles.popupText}>Call Safety Agent</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.popupBtn}>
//               <Ionicons name="location" size={20} color="black" />
//               <Text style={styles.popupText}>Share Live Location</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.popupBtn, { backgroundColor: '#eee' }]}
//               onPress={() => setShowEmergency(false)}
//             >
//               <Text style={styles.popupText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   topBar: { flexDirection: 'row', alignItems: 'center', padding: 12 },
//   title: { flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 },
//   card: {
//     margin: 12,
//     padding: 12,
//     backgroundColor: '#fdfdfd',
//     borderRadius: 10,
//   },
//   rowBetween: { flexDirection: 'row', justifyContent: 'space-between' },
//   name: { fontWeight: '700', fontSize: 16 },
//   changeBtn: { color: 'blue', fontWeight: '600' },
//   orderId: { marginTop: 6, fontWeight: '600' },
//   paymentText: { fontSize: 16 },
//   amount: { fontSize: 18, fontWeight: '700' },
//   invoice: { marginTop: 4, fontSize: 12, color: 'gray' },
//   actions: { flexDirection: 'row', marginTop: 10 },
//   btnLight: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginHorizontal: 4,
//     alignItems: 'center',
//     borderRadius: 6,
//   },
//   section: {
//     margin: 12,
//     padding: 12,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//   },
//   sectionTitle: { fontWeight: '700', marginBottom: 8 },
//   timelineItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   time: { fontSize: 12, color: 'gray' },
//   // fab: {
//   //   position: 'absolute',
//   //   right: 20,
//   //   bottom: 30,
//   //   backgroundColor: 'red',
//   //   padding: 16,
//   //   borderRadius: 30,
//   //   elevation: 5,
//   // },
//   fab: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     // backgroundColor: 'white', // white glow/border
//     justifyContent: 'center',
//     alignItems: 'center',
//     // shadowColor: '#000',
//     // shadowOpacity: 0.15,
//     // shadowOffset: { width: 0, height: 3 },
//     // shadowRadius: 4,
//     // elevation: 8,
//     // width: 60,
//     // height: 60,
//     // borderRadius: 30,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   // fabWrapper: {
//   //   position: 'absolute',
//   //   right: 20,
//   //   bottom: 30,
//   //   borderRadius: 40,
//   //   elevation: 6,
//   // },
//   fabWrapper: {
//     position: 'absolute',
//     right: 20,
//     bottom: 30,
//     borderRadius: 40,
//     elevation: 6,
//   },
//   fabBorder: {
//     // width: 70,
//     // height: 70,
//     // borderRadius: 35,
//     // backgroundColor: 'white', // white glow/border
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // shadowColor: '#000',
//     // shadowOpacity: 0.15,
//     // shadowOffset: { width: 0, height: 3 },
//     // shadowRadius: 4,
//     // elevation: 8, // for Android shadow
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: 'white', // white glow/border
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 3 },
//     shadowRadius: 4,
//     elevation: 8,
//   },
//   popupOverlay: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0,0,0,0.3)',
//   },
//   popup: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   popupTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
//   popupBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 14,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   popupText: { marginLeft: 10, fontSize: 15 },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar'; // ✅ Import your SearchBar

export default function TrackingScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { profile, total, paymentMethod = 'Cash' } = route.params || {};

  const [showEmergency, setShowEmergency] = useState(false);

  // Generate random invoice number
  const invoiceNo = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateStr = now.toLocaleDateString();

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ Search Bar at the top */}
      <SearchBar />

      <ScrollView>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>My Booking Orders</Text>
        </View>

        {/* Order Card */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.name}>Delivered To: {profile?.name}</Text>
            <TouchableOpacity>
              <Text style={styles.changeBtn}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text>{profile?.address}</Text>
          <Text>Phone: {profile?.phone}</Text>

          <Text style={styles.orderId}>
            ID: {Math.floor(Math.random() * 999999)}
          </Text>
          <Text>
            {dateStr} | Time {timeStr}
          </Text>

          <View style={styles.rowBetween}>
            <Text style={styles.paymentText}>{paymentMethod} :</Text>
            <Text style={styles.amount}>${total}</Text>
          </View>

          <Text style={styles.invoice}>Invoice no: {invoiceNo}</Text>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.btnLight}>
              <Text>Live Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLight}>
              <Text>Approved</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tracking Updates */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Tracking Updates</Text>
            <Text style={{ color: 'gray' }}>Change/Stop</Text>
          </View>

          {[
            { status: 'Consign has been made', time: '05:30' },
            { status: 'Processing...', time: '06:10' },
            { status: 'On the way', time: '06:30' },
            { status: 'Pending', time: '07:10' },
            { status: 'Done', time: '07:30' },
          ].map((item, i) => (
            <View key={i} style={styles.timelineItem}>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={i < 3 ? 'black' : 'lightgray'}
              />
              <View style={{ marginLeft: 8 }}>
                <Text>{item.status}</Text>
                <Text style={styles.time}>
                  {dateStr} | Time {item.time}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Emergency Button with SVG Icon */}
      <TouchableOpacity
        onPress={() => setShowEmergency(true)}
        style={styles.fabWrapper}
      >
        <View style={styles.fabBorder}>
          <View style={styles.fab}>
            <Image
              source={require('../assets/images/emergencyButton.jpeg')}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* Emergency Popup */}
      <Modal
        visible={showEmergency}
        transparent
        animationType="slide"
        onRequestClose={() => setShowEmergency(false)}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <Text style={styles.popupTitle}>Emergency Contact</Text>

            <TouchableOpacity style={styles.popupBtn}>
              <Ionicons name="call" size={20} color="black" />
              <Text style={styles.popupText}>Get Help from 000</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.popupBtn}>
              <Ionicons name="shield" size={20} color="black" />
              <Text style={styles.popupText}>Call Safety Agent</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.popupBtn}>
              <Ionicons name="location" size={20} color="black" />
              <Text style={styles.popupText}>Share Live Location</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.popupBtn, { backgroundColor: '#eee' }]}
              onPress={() => setShowEmergency(false)}
            >
              <Text style={styles.popupText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  title: { flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 },
  card: {
    margin: 12,
    padding: 12,
    backgroundColor: '#fdfdfd',
    borderRadius: 10,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontWeight: '700', fontSize: 16 },
  changeBtn: { color: 'blue', fontWeight: '600' },
  orderId: { marginTop: 6, fontWeight: '600' },
  paymentText: { fontSize: 16 },
  amount: { fontSize: 18, fontWeight: '700' },
  invoice: { marginTop: 4, fontSize: 12, color: 'gray' },
  actions: { flexDirection: 'row', marginTop: 10 },
  btnLight: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginHorizontal: 4,
    alignItems: 'center',
    borderRadius: 6,
  },
  section: {
    margin: 12,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  sectionTitle: { fontWeight: '700', marginBottom: 8 },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  time: { fontSize: 12, color: 'gray' },
  fabWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    borderRadius: 40,
    elevation: 6,
  },
  fabBorder: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 8,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  // svgIcon: {
  //   width: 44,
  //   height: 44,
  //   // borderRadius: 22,
  // },
  popupOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  popupTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  popupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  popupText: { marginLeft: 10, fontSize: 15 },
});
