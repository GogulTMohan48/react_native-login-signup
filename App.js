import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LogIn from './screens/LogIn';



const Stack = createNativeStackNavigator ()

export default function App (){
    //signUp 
  return (
   
     <NavigationContainer NavigationContainer>
      <Stack.Navigator initialRouteName='signIn'
     

     screenOptions={{
      headerStyle: {
        backgroundColor: 'black',

    
         // Customize header background color
      },
      headerTintColor: '#fff', // Customize text color of header title and buttons
      headerTitleStyle: {
        fontWeight: 'bold',
        
        // Customize header title style
      },
      // Customize screen background color and width
      cardStyle: {
        backgroundColor: 'lightblue', // Customize screen background color
        width: '90%', // Customize screen width
        alignSelf: 'center',
        
      
         // Center screen horizontally
      },



      headerTitleAlign: 'center', // Center-align header title
      headerLeftContainerStyle: {
        marginLeft: 10, // Adjust left margin to prevent overlap
      
      },
      headerRightContainerStyle: {
        marginRight: 10, // Adjust right margin if needed
      },




    }}
      
  
      
      >
      <Stack.Screen  name='Company Logo' component={HomeScreen}/>
        <Stack.Screen name='signUp' component={LogIn}/>

      </Stack.Navigator>
     </NavigationContainer>
       
     
    
  );
};

