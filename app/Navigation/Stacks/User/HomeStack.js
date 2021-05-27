import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../../Screens/Home/HomeScreen'

const HomeStack = createStackNavigator();

function HomeNavigator({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerLeft: () => (
            <Icon.Button 
              name="ios-menu" 
              size={30} 
              backgroundColor="#009387"
              // style={{marginLeft: 10}}
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;