import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ShowProductsScreen from '../../../Screens/Products/ShowProductsScreen'

const ShowProductsStack = createStackNavigator();

function ShowProductsNavigator() {
  return (
    <ShowProductsStack.Navigator>
      <ShowProductsStack.Screen name="Show Products" component={ShowProductsScreen} />
    </ShowProductsStack.Navigator>
  );
}

export default ShowProductsNavigator;