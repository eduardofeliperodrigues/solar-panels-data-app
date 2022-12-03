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
  },

  //Nav
  navSunner: {
    marginBottom: 40,
    borderWidth: 1,
    marginTop: 20,
    marginRight: 40,
    borderRadius: 5,
    backgroundColor: '#27FF7E',
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: 'center',
  },

  navText: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    paddingLeft: 33,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  navImage: {
    marginLeft: 36,
    height: 35,
    width: 40,
  },

  //Img Central
  ajustarAvatar: {
    alignItems: 'center',
  },

  avatar: {
    marginBottom: 30,
    height: 100,
    width: 100,
  },

  //Input
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

});

export default styles;