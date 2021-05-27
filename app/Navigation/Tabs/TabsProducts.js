import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Stacks
import ProductsStack from '../Stacks/Products/ProductsStack'
import ShowProductsStack from '../Stacks/Products/ShowProductsStack'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator 
      initialRouteName='Products'
      activeColor='#333'
      inactiveColor='gray'
      shifting={true}
      barStyle={{ backgroundColor: 'whitesmoke' }}
    >
      <Tab.Screen 
        name="Products" 
        component={ProductsStack} 
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color }) => (
            <Icon name="md-pricetags" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Others" 
        component={ShowProductsStack} 
        options={{
          tabBarLabel: 'Others', 
          tabBarIcon: ({color}) => (
            <Icon name="ios-list-circle" color={color} size={26} />
          ) 
        }} 
      />
    </Tab.Navigator>
  );
}