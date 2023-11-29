const express = require("express");
const router= express.Router();
const detalleMenuController = require("../controllers/productsDetailController")

router.get("/detalle/:id", detalleMenuController.detail)

module.exports = router;