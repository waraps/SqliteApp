import * as React from 'react';
import { Easing } from "react-native";
import "react-native-gesture-handler";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Screens
import Auth from '../Screens/Auth';

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 80,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configClose = {
  animation: "timing",
  config: {
    duration: 80,
    easing: Easing.linear,
  },
};

const AuthStack = createStackNavigator();
export default function AuthStackScreen({navigation}) {
  return (
    <AuthStack.Navigator 
        // headerMode="none"
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: configClose,
          },
        }}
        animation="fade">
      <AuthStack.Screen 
        name="Login" 
        component={Auth} 
        options={{ title: 'Iniciar Sesion' }}
      />
    </AuthStack.Navigator>
  );
};