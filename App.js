import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LogIn from './screens/LogIn';



const Stack = createNativeStackNavigator ()

export default function App (){
    
  return (
   
     <NavigationContainer NavigationContainer>
      <Stack.Navigator initialRouteName='signIn'
     

     screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff', 
      headerTitleStyle: {
        fontWeight: 'bold',
     
      },
      cardStyle: {
        backgroundColor: 'lightblue', 
        width: '90%', 
        alignSelf: 'center',
        
      
        
      },



      headerTitleAlign: 'center', 
      headerLeftContainerStyle: {
        marginLeft: 10, 
      
      },
      headerRightContainerStyle: {
        marginRight: 10, 
      },




    }}
      
  >
      <Stack.Screen  name='Company Logo' component={HomeScreen}/>
        <Stack.Screen name='signUp' component={LogIn}/>

      </Stack.Navigator>
     </NavigationContainer>
       
     
    
  );
};

