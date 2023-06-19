const { BasketDevice } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketDeviceController {
  async create(req, res) {
    const { id, deviceId, basketId } = req.body;
    const basketDevices = await BasketDevice.create({
      id,
      deviceId,
      basketId,
    });
    return res.json(basketDevices);
  }

  async getAll(req, res) {
    const { basketId } = req.query;
    const basketDevices = await BasketDevice.findAll({
      where: { basketId: basketId },
    });
    return res.json(basketDevices);
  }

  async deleteOne(req, res) {
    const { id, basketId, deviceId } = req.query;
    const basketDevices = await BasketDevice.destroy({
      where: { id: id, basketId: basketId, deviceId: deviceId },
    });
    return res.json(basketDevices);
  }
}

module.exports = new BasketDeviceController();
