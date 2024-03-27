import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity  } from 'react-native';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSignIn =  () => {
   
// 
   
   
   
     // Validate input fields
     if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
   // Proceed with sign-up logic (e.g., make API call, save to database, etc.)
    // For demonstration purposes, just log the values
    console.log('Signing up with:', username, email, password, confirmPassword);

    // Reset input fields after sign-up
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Show success message or navigate to another screen
    Alert.alert('Success', 'Sign-up successful!');
   
   
   
   
   
  //  
   
   
   
    // Check if username and password are correct
    //  if (username === 'user' && password === 'password') {
      // If correct, navigate to the home screen or perform other actions
      // Alert.alert('Success', 'You have successfully signed in!');
    //  } else {
      // If incorrect, show an error message
      // Alert.alert('Error', 'Invalid details. Please try again.');
    //  }

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

export default HomeScreen;






// 
// 
