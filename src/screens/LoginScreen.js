import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/slices/authSlice';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const dummyUser = {
      name: 'Guest User',
      email: 'guest@twinleaves.com',
    };
    dispatch(signIn(dummyUser));
    navigation.replace('Products');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to TwinLeaves</Text>

      <TouchableOpacity style={styles.normalButton} onPress={handleLogin}>
        <Text style={styles.normalButtonText}>Login</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  normalButton: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  normalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

});

export default LoginScreen;
