import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";

import Splash from "./src/pages/splash";
import Inicio from "./src/pages/inicio";
import comoFunc from "./src/pages/comoFunc";
import Home from './src/pages/home';

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen
          name="inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="comoFunc"
          component={comoFunc}
          options={{
            headerTitle: "Como funciona?",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              color: "#519548",
              fontSize:20,
            },
            headerLeft: () => {},
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
