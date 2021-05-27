import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Stacks
import HomeStack from '../Stacks/User/HomeStack'
import ProfileStack from '../Stacks/User/ProfileStack'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      activeColor='#fff'
      shifting={true}
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          // tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{ 
          tabBarBadge: 1, 
          tabBarIcon: ({color}) => (
            <Icon name='person-circle' color={color} size={26} />
          ) 
        }} 
      />
    </Tab.Navigator>
  );
}