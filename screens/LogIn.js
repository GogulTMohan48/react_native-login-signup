import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity  } from 'react-native';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSignIn =  () => {
   
     if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
 
    console.log('Signing up with:', username, email, password, confirmPassword);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    
    Alert.alert('Success', 'Sign-up successful!');
   
  };

  return (
 
   
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
             <TextInput 
          style={styles.input}
          placeholder="Enter your Name"
          value={username}
          onChangeText={setUsername}
        />
         <TextInput 
          style={styles.input}
       
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
         
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
         
          placeholder="confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
  
  <TouchableOpacity title="Sign Up" onPress={handleSignIn} style={styles.button}>
         <Text  style={styles.buttonText}>SignUp</Text>
         </TouchableOpacity>
        <View style={styles.footer}>
        <Text onPress={()=>navigation.navigate("Company Logo")} style={styles.text}>You have account? LogIn</Text>
      </View>
 </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
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
    backgroundColor: '#000', 
    width: '80%',
    height: 50, 
    borderRadius: 5, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
 


});

export default HomeScreen;






