const {getData} = require('../firestore/firestore');

class DataController {
  async index(req, res) {
    return res.json({message: 'ok'});
  }

  async show(req, res) {
    const data = await getData('solarPanelData')
    return res.json(data);
  }
  
}

module.exports = new DataController();
