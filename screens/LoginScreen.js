import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [rememberMe, setRememberMe] = useState(false);

  const validUsername = 'easy123'; // hardcoded username

  const validPassword = '12345'; // hardcoded password

  const handleLogin = () => {
    if (
      username.trim().toLowerCase() === validUsername &&
      password === validPassword
    ) {
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Wrong username or password.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/easyparlour.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <Text style={styles.title}>EASY PARLOUR</Text>
      <Text style={styles.subtitle}>Parlour at your any Location</Text> */}

      {/* Box */}
      <View style={styles.box}>
        <Text style={styles.welcomeText}>Welcome Easy Parlour App</Text>

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

        {/* Remember + Forgot */}
        <View style={styles.rowBetween}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={{
                width: 15,
                height: 15,
                borderWidth: 1,
                borderColor: 'gray',
                marginRight: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {rememberMe && (
                <Ionicons name="checkmark" size={16} color="#000" />
              )}
            </TouchableOpacity>
            <Text style={{ color: 'gray' }}>Remember me</Text>
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert('Reset', 'Forgot Password pressed')}
          >
            <Text style={{ color: 'gray' }}>Forget password</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom */}
      <View style={styles.bottomText}>
        <Text style={{ color: 'gray' }}>Don’t have account </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ fontWeight: 'bold' }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>

      {/* Login redirect */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>LOGIN</Text>
      </TouchableOpacity>
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
  logo: { width: 150, height: 150, marginBottom: 10 }, // increased size
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 6 },
  subtitle: { fontSize: 14, color: 'gray', marginBottom: 20 },
  box: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: { fontSize: 16, marginBottom: 12, fontWeight: '500' },

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
    color: 'black',
  },
  input: { flex: 1 },

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

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
    alignItems: 'center',
  },
  rememberRow: { flexDirection: 'row', alignItems: 'center' },
  bottomText: { flexDirection: 'row', marginTop: 20 },
  loginBtn: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
  },
});
