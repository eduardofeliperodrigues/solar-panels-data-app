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
    listSelect: ['Morador'],
    tpAcesso: "M",
    listUser: [{
      label: 'Morador', chart: [
        { tipo_de_grafico: 'Grafico de Temperatura', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Temperatura Minima',data:[15.7,14.5,16,8,15.6,10.2,11.1,12.0]},{label:'Temperatura Maxima',data:[30.8,25.8,32.6,25.7,26.2,29.3,27.6]}]}}" },
        { tipo_de_grafico: 'Energia gerada', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Energia Gerada',data:[36.7,28.5,32.9,15.6,10.2,11.1,10]}]}}" }
      ]
    }]
  }

  const acessoAdminSindico = {
    listSelect: ['Morador', 'Sindico'],
    tpAcesso: "S",
    listUser: [{
      label: 'Sindico', chart: [
        { tipo_de_grafico: 'Grafico de Temperatura', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Temperatura Minima',data:[15.7,14.5,16,8,15.7,14.5,15]},{label:'Temperatura Maxima',data:[30.8,25.8,32.6,25.7,26.2,29.3,27.6]}]}}" },
        { tipo_de_grafico: 'Energia gerada', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Energia Gerada',data:[36.7,28.5,32.9,15.6,28.5,32.9,15.6]}]}}" }
      ]
    },
    {
      label: 'Morador', chart: [
        { tipo_de_grafico: 'Grafico de Temperatura', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Temperatura Minima',data:[15.7,14.5,16,8,15.7,14.5,15]},{label:'Temperatura Maxima',data:[30.8,25.8,32.6,25.7,26.2,29.3,27.6]}]}}" },
        { tipo_de_grafico: 'Energia gerada', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Energia Gerada',data:[36.7,28.5,32.9,15.6,28.5,32.9,15.6]}]}}" }
      ]
    }]
  }

  const acessoAdminAdministrador = {
    listSelect: ['Morador', 'Sindico', 'Administrador'],
    tpAcesso: "A",
    listUser: [{
      label: 'Administrador', chart: [
        { tipo_de_grafico: 'Grafico de Temperatura', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Temperatura Minima',data:[19.7,18.5,26,8,13.7,17.5,19]},{label:'Temperatura Maxima',data:[30.8,25.8,32.6,25.7,26.2,29.3,27.6]}]}}" },
        { tipo_de_grafico: 'Energia gerada', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Energia Gerada',data:[30.7,38.5,32.9,15.6,28.5,36.9,19.6]}]}}" }
      ]
    },
    {
      label: 'Sindico', chart: [
        { tipo_de_grafico: 'Grafico de Temperatura', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Temperatura Minima',data:[15.7,14.5,16,8,15.7,14.5,15]},{label:'Temperatura Maxima',data:[30.8,25.8,32.6,25.7,26.2,29.3,27.6]}]}}" },
        { tipo_de_grafico: 'Energia gerada', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Energia Gerada',data:[36.7,28.5,32.9,15.6,28.5,32.9,15.6]}]}}" }
      ]
    },
    {
      label: 'Morador', chart: [
        { tipo_de_grafico: 'Grafico de Temperatura', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Temperatura Minima',data:[15.7,14.5,16,8,15.6,10.2,11.1,12.0]},{label:'Temperatura Maxima',data:[30.8,25.8,32.6,25.7,26.2,29.3,27.6]}]}}" },
        { tipo_de_grafico: 'Energia gerada', grafico: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],datasets:[{label:'Energia Gerada',data:[36.7,28.5,32.9,15.6,10.2,11.1,10]}]}}" }
      ]
    }]
  }

  const verificarDados = () => {
    if (usuario == 'morador' && senha == '123') {
      gravar(acessoMorador)
      navigation.navigate('Minha Conta')
    }
    else if ((usuario == 'sindico') && senha == '123') {
      gravar(acessoAdminSindico)
      navigation.navigate('Minha Conta')
    }
    else if ((usuario == 'admin') && senha == '123') {
      gravar(acessoAdminAdministrador)
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
    <View style={{ minHeight: `100vh` }}>
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