import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Stacks
import AuthStack from './AuthStack'

// Drawer
import Drawer from './Drawers/Drawer'

// Database
import { DbInit } from "../Database/db-connection";

// LocalStorage
import {localStorage} from '../Storage/LocalStorage'

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    DbInit()
    getUser()
  }, [])

  const  getUser = async () => {
    try {
      const data = await localStorage.getUser()
      setUser(data)
    } catch (error) {
      alert('Ocurrio un error!')
    }
  }

  return (
    <RootStack.Navigator headerMode="none">
        {
          user ? <RootStack.Screen name="Drawer" component={Drawer} />
              : <RootStack.Screen name="AuthStack" component={AuthStack} />
        }
    </RootStack.Navigator>
  );
};