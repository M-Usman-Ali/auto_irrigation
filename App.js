import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Crops from './src/Crops';
import Signup from './src/Signup';
import Login from './src/Login';
import Addcrops from './src/assets/Addcrops';
import ImagePick from './src/assets/ImagePicker';
import Cropdetail from './src/assets/Cropsdetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Cropdetail" component={Cropdetail} /> */}
      {/* <Stack.Screen name="ImagePick" component={ImagePick} /> */}
      <Stack.Screen name="Addcrops" component={Addcrops} />
        {/* <Stack.Screen name="SelectedCrops" component={SelectedCrops} /> */}
        {/* <Stack.Screen name="Crops" component={Crops} /> */}
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;