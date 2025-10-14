import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './components/CartContext';

// Screens
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LocationAccessScreen from './screens/LocationAccessScreen';
import HomeScreen from './HomeScreen';
import BookingsScreen from './screens/BookingsScreen';
import OffersScreen from './screens/OffersScreen';
import SavedScreen from './screens/SavedScreen';
import ReelsScreen from './screens/ReelsScreen';
import ServiceExpandScreen from './ServiceExpandScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import ParlourProfileScreen from './screens/ParlourProfileScreen';
import VerifyProfileScreen from './screens/VerifyProfileScreen';
import MainLayout from './MainLayout';
import UserProfileScreen from './screens/UserProfileScreen';
import RewardsScreen from './screens/RewardsScreen';
import MyRatingScreen from './screens/MyRatingScreen';
import Notifications from './screens/NotificationsScreen';
import ServiceDetailsScreen from './screens/ServiceDetailsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmOrderScreen from './screens/ConfirmOrderScreen';
import TrackingScreen from './screens/TrackingScreen';
import ManageAddressesScreen from './screens/ManageAddressesScreen';

const Stack = createNativeStackNavigator();

// HOC for wrapping screens inside MainLayout
function withLayout(Component) {
  return props => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          {/* Auth Screens */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />

          {/* Location Access Screen */}
          <Stack.Screen
            name="LocationAccess"
            component={LocationAccessScreen}
          />

          {/* Main App Screens */}
          <Stack.Screen name="Home" component={withLayout(HomeScreen)} />
          <Stack.Screen
            name="Bookings"
            component={withLayout(BookingsScreen)}
          />
          <Stack.Screen name="Offers" component={withLayout(OffersScreen)} />
          <Stack.Screen name="Saved" component={withLayout(SavedScreen)} />
          <Stack.Screen name="Reels" component={withLayout(ReelsScreen)} />
          <Stack.Screen
            name="UserProfile"
            component={withLayout(UserProfileScreen)}
          />

          {/* Other Screens */}
          <Stack.Screen name="ServiceExpand" component={ServiceExpandScreen} />
          <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
          <Stack.Screen
            name="ParlourProfile"
            component={ParlourProfileScreen}
          />
          {/* <Stack.Screen name="ServiceDetails" component={ServiceDetails} /> */}
          <Stack.Screen name="VerifyProfile" component={VerifyProfileScreen} />
          <Stack.Screen name="Rewards" component={RewardsScreen} />
          <Stack.Screen name="MyRating" component={MyRatingScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen
            name="ManageAddresses"
            component={withLayout(ManageAddressesScreen)}
          />
          <Stack.Screen
            name="ServiceDetails"
            component={ServiceDetailsScreen}
          />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
          <Stack.Screen name="Tracking" component={TrackingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
