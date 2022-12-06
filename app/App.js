import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import CriarConta from './pages/login/criarConta';
import Login from './pages/login/index';
import telaUser from './pages/telaUser';
import { View } from "react-native";
import apiYohan from './pages/apiyohan/apiYohan'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}
            options={{ headerTintColor: "purple" }}>
          </Stack.Screen>
          <Stack.Screen name="Criar Conta" component={CriarConta}
            options={{ headerTintColor: "purple" }}>
          </Stack.Screen>
          <Stack.Screen name="Minha Conta" component={telaUser} />
          <Stack.Screen name="ApiYohan" component={apiYohan} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
