import { React, useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from '../../style/login/styles';
import DadosAcesso from '../../components/login/dadosAcesso';

function Entrar() {
  return (
    <View style={styles.container}>
      <DadosAcesso />
      <View style={styles.viewInput}>
        <Button title="Entrar" />
      </View>
    </View>
  );
}

export default Entrar;
