const { Basket } = require("../models/models");

class BasketController {
  async getAll(req, res) {
    const basket = await Basket.findAll();
    return res.json(basket);
  }
}

module.exports = new BasketController();
