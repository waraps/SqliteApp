import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SettingsScreen from '../../../Screens/Settings/SettingsScreen'

const SettingsStack = createStackNavigator();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;