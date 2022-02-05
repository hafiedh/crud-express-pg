const { peserta } = require("../config/index");

class Peserta {
  static getPeserta() {
    return peserta;
  }

  static getPesertaById(id) {
    return peserta[id];
  }
}

module.exports = Peserta;
