import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert,TouchableOpacity } from 'react-native';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validation checks can be added here

    // Example validation: Check if username and password are not empty
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    // Perform login logic here, such as calling an authentication API
    // For simplicity, let's assume successful login if both fields are filled
    Alert.alert('Success', 'You have successfully logged in!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

<TouchableOpacity onPress={handleLogin}  style={styles.button}>
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>



      <View style={styles.footer}>
      <Text onPress={()=>navigation.navigate("signUp")} style={styles.text}>Don't have any account? Sign Up</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
   
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },

  button: {
    backgroundColor: '#000', // Black background color
    width: '80%', // Width of the button
    height: 50, // Height of the button
    borderRadius: 5, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});

export default LoginPage;
