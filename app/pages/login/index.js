import { React, useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import DadosAcesso from '../../components/login/dadosAcesso';

export default function Login({ navigation }) {
  const buttonClickedHandler = () => {
    window.alert('entrar');
  };

  return (
    <View style={styles.container}>
      <DadosAcesso />
      <View style={styles.viewInput}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.btnEntrar}>
          <Text>enter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createAccount}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Criar Conta')}
        >
          <Text>create account {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}