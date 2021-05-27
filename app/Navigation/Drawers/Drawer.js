import * as React from 'react';
import { SafeAreaView, View, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Tabs
import TabsHome from '../Tabs/TabsHome'
import TabsProducts from '../Tabs/TabsProducts'

// Stack
import SettingStack from '../Stacks/Settings/SettingStack'

// Component
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator();

export default function DrawerApp() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} >
      <Drawer.Screen name="Home" component={TabsHome} />
      <Drawer.Screen name="Products" component={TabsProducts} />
      <Drawer.Screen name="Settings" component={SettingStack} />
    </Drawer.Navigator>
  );
}