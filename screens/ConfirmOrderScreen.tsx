import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define type for service object
type Service = {
  id: string;
  name: string;
  productPrice: number;
  serviceCharge: number;
};

// Define type for route params
type ConfirmOrderRouteParams = {
  profile: {
    name: string;
    address?: string;
    phone?: string;
  };
  service: Service;
  subtotal: number;
  platformFee: number;
  vatTax: number;
  deliveryFee: number;
  total: number;
};

export default function ConfirmOrderScreen() {
  const route =
    useRoute<RouteProp<{ params: ConfirmOrderRouteParams }, 'params'>>();
  const navigation = useNavigation<any>();

  // Receive checkout data
  const {
    profile,
    service,
    subtotal,
    platformFee,
    vatTax,
    deliveryFee,
    total,
  } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Confirm & Place Order</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Search Bar */}
        <SearchBar />

        {/* Payment Method */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            <TouchableOpacity>
              <Text style={styles.changeBtn}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.paymentBox}>
            <Text style={styles.paymentText}>Cash :</Text>
            <Text style={styles.paymentAmount}>${total}</Text>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryBox}>
            <Text style={styles.serviceName}>{service?.name}</Text>
            <Text>Product: ${service?.productPrice}</Text>
            <Text>Service: ${service?.serviceCharge}</Text>
          </View>

          {/* Extra Fees */}
          <View style={styles.feeRow}>
            <Text>Platform Fees</Text>
            <Text>${platformFee}</Text>
          </View>
          <View style={styles.feeRow}>
            <Text>VAT & Taxes</Text>
            <Text>${vatTax}</Text>
          </View>
          <View style={styles.feeRow}>
            <Text>Delivery Fees</Text>
            <Text>${deliveryFee}</Text>
          </View>
          <View style={styles.feeRow}>
            <Text style={{ fontWeight: '600' }}>SUBTOTAL</Text>
            <Text style={{ fontWeight: '600' }}>${subtotal}</Text>
          </View>
        </View>

        {/* Place Order */}
        <View style={styles.footer}>
          <View style={styles.subtotalRow}>
            <Text style={{ fontWeight: '600' }}>
              Sub Total (Incl. fees and tax)
            </Text>
            <Text style={{ fontWeight: '700' }}>${total}</Text>
          </View>
          <TouchableOpacity
            style={styles.placeOrderBtn}
            onPress={() =>
              navigation.navigate('Tracking', {
                profile,
                total,
                paymentMethod: 'Cash',
              })
            }
          >
            <Text style={styles.placeOrderText}>Place order</Text>
          </TouchableOpacity>
        </View>
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
  title: { flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 },
  section: { margin: 12, padding: 12, backgroundColor: '#fdfdfd' },
  sectionTitle: { fontWeight: '700', marginBottom: 8 },
  changeBtn: { color: 'blue', fontWeight: '600' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentText: { fontSize: 16 },
  paymentAmount: { fontSize: 18, fontWeight: '700' },
  summaryBox: { paddingVertical: 10 },
  serviceName: { fontWeight: '700', marginBottom: 4 },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  footer: { padding: 16 },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  placeOrderBtn: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
