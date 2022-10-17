import { React, useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from './styles';

function DadosAcesso() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View>
      <View style={styles.navSunner}>
        <Text style={styles.navText}>Sunner</Text>
        <Image
          source={require('../../assets/solar-panel.png')}
          style={styles.navImage}></Image>
      </View>
      <View style={styles.ajustarAvatar}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}></Image>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          value={usuario}
          onChangeText={(text) => {
            setUsuario(text);
          }}
          placeholder="username"
          style={styles.input}
        />
        <TextInput
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
          }}
          secureTextEntry={true}
          placeholder="password"
          style={styles.input}
        />
      </View>
    </View>
  );
}

export default DadosAcesso;
