import { React, useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import DadosAcesso from '../../components/login/dadosAcesso';

export default function CriarConta() {
  const [email, setEmail] = useState('');
  const [morador, setMorador] = useState(true);
  const [sindico, setSindico] = useState(false);

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
      <DadosAcesso />
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