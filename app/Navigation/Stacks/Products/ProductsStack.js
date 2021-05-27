import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import AddProductScreen from '../../../Screens/Products/AddProductScreen'

const AddProductStack = createStackNavigator();

function AddProductNavigator() {
  return (
    <AddProductStack.Navigator>
      <AddProductStack.Screen name="New Product" component={AddProductScreen} />
    </AddProductStack.Navigator>
  );
}

export default AddProductNavigator;