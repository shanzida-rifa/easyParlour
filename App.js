import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './HomeScreen';
import BookingsScreen from './screens/BookingsScreen';
import OffersScreen from './screens/OffersScreen';
import SavedScreen from './screens/SavedScreen';
import ReelsScreen from './screens/ReelsScreen';
import ServiceExpandScreen from './ServiceExpandScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import ParlourProfileScreen from './screens/ParlourProfileScreen';
import ServiceDetails from './screens/ServiceDetails';
import VerifyProfileScreen from './screens/VerifyProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from './MainLayout';
import UserProfileScreen from './screens/UserProfileScreen';

const Stack = createNativeStackNavigator();

// const Stack = createStackNavigator();

function withLayout(Component) {
  return props => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        <Stack.Screen name="Home" component={withLayout(HomeScreen)} />
        <Stack.Screen name="Bookings" component={withLayout(BookingsScreen)} />
        <Stack.Screen name="Offers" component={withLayout(OffersScreen)} />
        <Stack.Screen name="Saved" component={withLayout(SavedScreen)} />
        <Stack.Screen name="Reels" component={withLayout(ReelsScreen)} />
        <Stack.Screen
          name="UserProfile"
          component={withLayout(UserProfileScreen)}
        />

        <Stack.Screen name="ServiceExpand" component={ServiceExpandScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="ParlourProfile" component={ParlourProfileScreen} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="VerifyProfile" component={VerifyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
