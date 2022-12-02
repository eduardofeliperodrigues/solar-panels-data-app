import { React, useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import DadosAcesso from '../../components/login/dadosAcesso';

export default function CriarConta() {
  const [email, setEmail] = useState('');
  const [morador, setMorador] = useState(true);
  const [sindico, setSindico] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  
  const tipoMorador = () => {
    setSindico(false);
    setMorador(true);
  };
  const tipoSindico = () => {
    setSindico(true);
    setMorador(false);
  };

  const buttonClickedHandler = () => {
    window.alert('\nemail: ' + email + '\nSindico?  ' + sindico + '\nMorador?  ' + morador);
  };

  return (
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
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="e-mail"
          style={styles.input}
        />
      </View>
      <View style={styles.viewInput}>
        <View style={styles.ajustarTipoAcesso}>
          <CheckBox
            title="Morador"
            center
            checked={morador}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={tipoMorador}
            style={styles.chkAcesso}
          />
          <CheckBox
            title="Sindico"
            center
            checked={sindico}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={tipoSindico}
            style={styles.chkAcesso}
          />
        </View>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.btnSubmit}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}