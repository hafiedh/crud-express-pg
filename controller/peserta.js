const { pesertaModel } = require("../model");

class PesertaController {
  static getPeserta(req, res) {
    const result = pesertaModel.getPeserta();
    console.log(result);
    res.status(200).json(result);
    return;
  }

  static getPesertaById(req, res) {
    const { id } = req.params;
    const result = pesertaModel.getPesertaById(id);
    res.status(200).json(result);
    return;
  }
}

module.exports = PesertaController;
