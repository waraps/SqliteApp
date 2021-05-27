import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//RootStack
import {RootStackScreen} from './RootStack';

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};