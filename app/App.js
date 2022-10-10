import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Entrar  from './pages/login/index';
import  CriarConta  from './pages/login/criarConta'


export default function App() {
  return (
    <>
      <Entrar />
      <StatusBar style="auto" />
    </>
  );
}
