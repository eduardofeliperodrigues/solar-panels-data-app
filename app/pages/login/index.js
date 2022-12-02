import { React, useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import DadosAcesso from '../../components/login/dadosAcesso';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { minHeight } from '@mui/system';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const acessoMorador = {
    qtd: "1",
    tpAcesso: "M",
    urlPainel: ["https://data-show-solar-panels-g35sbyt74q-uc.a.run.app/filtered/1104F0191290005"]
  }

  const acessoAdminSindico = {
    qtd: "2",
    tpAcesso: "A",
    urlPainel: ["https://data-show-solar-panels-g35sbyt74q-uc.a.run.app/filtered/1104F0191290005", "https://data-show-solar-panels-g35sbyt74q-uc.a.run.app/filtered/01047018A150017"]
  }

  const verificarDados = () => {
    if (usuario == 'morador' && senha == '123456') {
      gravar(acessoMorador)
      navigation.navigate('Minha Conta')
    }
    else if ((usuario == 'sindico' || usuario == 'admin') && senha == '123456') {
      gravar(acessoAdminSindico)
      navigation.navigate('Minha Conta')
    }
  }

  const gravar = async (dadosUsuario) => {
    try {
      const dados = JSON.stringify(dadosUsuario)
      await AsyncStorage.setItem("@usuario", dados)
    } catch (erro) {
      console.log("Houve um erro", erro)
    }
  }

  return (
    <View style={{minHeight: `100vh`}}>
      <View style={styles.container}>
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
        <View style={styles.viewInput}>
          <TouchableOpacity
            onPress={verificarDados}
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
    </View>
  );
}