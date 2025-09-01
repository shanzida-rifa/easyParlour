import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './HomeScreen';
import ServiceExpandScreen from './ServiceExpandScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import ParlourProfileScreen from './screens/ParlourProfileScreen';
import ServiceDetails from './screens/ServiceDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ServiceExpand" component={ServiceExpandScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="ParlourProfile" component={ParlourProfileScreen} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
