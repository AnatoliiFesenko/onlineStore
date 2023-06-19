const Router = require("express");
const router = new Router();

const deviceRouter = require("./deviceRouter");
const typeRouter = require("./typeRouter");
const brandRouter = require("./BrandRouter");
const userRouter = require("./userRouter");
const basketRouter = require("./basketRouter");
const basketDeviceRouter = require("./basketDeviceRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/basket", basketRouter);
router.use("/basketDevice", basketDeviceRouter);

module.exports = router;
