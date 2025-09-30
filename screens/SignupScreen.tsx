import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// ✅ Define your stack param list
type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Home: undefined;
};

// ✅ Props type for this screen
type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
  route: RouteProp<RootStackParamList, 'Signup'>;
};

export default function SignupScreen({ navigation }: SignupScreenProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/easyparlour.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Box */}
      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Username/Email/Phone</Text>

        {/* Username */}
        <View style={styles.inputRow}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#000"
            style={{ marginRight: 8 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Username/Email/Phone"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Password */}
        <View style={styles.inputRow}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#000"
            style={{ marginRight: 8 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Signup button */}
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>SIGNUP</Text>
        </TouchableOpacity>

        {/* Divider line */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialWrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="logo-google"
              size={20}
              color="#000"
              style={{ marginRight: 8 }}
            />
            <Text>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="logo-apple"
              size={20}
              color="#000"
              style={{ marginRight: 8 }}
            />
            <Text>Continue with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="logo-facebook"
              size={20}
              color="#000"
              style={{ marginRight: 8 }}
            />
            <Text>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.infoText}>
          Create profile, follow other account, make your own video, and more
        </Text>

        <Text style={{ alignSelf: 'flex-end', color: 'gray', marginTop: 8 }}>
          Edit password
        </Text>
      </View>

      {/* Bottom */}
      <View style={styles.bottomText}>
        <Text style={{ color: 'gray' }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  box: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    width: '100%',
    marginBottom: 12,
  },
  input: {
    flex: 1,
  },
  socialWrapper: {
    width: '100%',
    marginTop: 10,
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    marginBottom: 10,
  },
  infoText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 13,
    marginTop: 8,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'gray',
    fontSize: 13,
  },
});
