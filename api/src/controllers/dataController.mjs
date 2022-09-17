class DataController {
  async index(req, res) {
    return res.json({message: 'ok'});
  }
}

export default new DataController();
