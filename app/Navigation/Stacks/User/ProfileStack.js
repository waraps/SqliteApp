import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import UserInfoScreen from '../../../Screens/Home/UserInfoScreen'

const UserInfoStack = createStackNavigator();

function UserInfoNavigator() {
  return (
    <UserInfoStack.Navigator>
      <UserInfoStack.Screen name="UserInfo" component={UserInfoScreen} />
    </UserInfoStack.Navigator>
  );
}

export default UserInfoNavigator;