import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCB0',
  },

  viewInput: {
    alignItems: 'center',
  },

  input: {
    marginTop: 10,
    marginBottom: 13,
    padding: 10,
    width: 250,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 3,
  },

  ajustarTipoAcesso: {
    flexDirection: 'row',
    textAlign: 'center',
    paddingTop: 10,
    marginBottom: 30,
  },

  btnSubmit: {
    width: 141,
    height: 29,
    borderRadius: 17,
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    fontFamily: 'Inter',
    backgroundColor: '#27FF7E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnEntrar: {
    width: 50,
    height: 21,
    borderRadius: 17,
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    fontFamily: 'Inter',
    backgroundColor: '#27FF7E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  createAccount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'end',
    marginBottom: 50,
    marginLeft: 25,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17,
  }

});

export default styles;