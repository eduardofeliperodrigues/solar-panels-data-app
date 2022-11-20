const admin = require('firebase-admin');

const keyFilename = require('./keyfile.json')

admin.initializeApp({
  credential: admin.credential.cert(keyFilename)
});


const db = admin.firestore()
const allExtrationsAvailable = [];

async function sendData(collectionName, item) {
  const res = await db.collection(collectionName).doc().set(item);
  console.log(res)
}

async function getData(collectionName) {
  const snap = await db.collection(collectionName).get();
  snap.forEach(item => allExtrationsAvailable.push(item.data()))

  return allExtrationsAvailable;
};

module.exports = {
  sendData,
  getData
}