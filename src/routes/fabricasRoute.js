const controller = require("../controllers/fabricaController"); 

const express = require("express");


const router = express.Router();


router.post("/add", controller.addNewFabrica);
router.get("/all", controller.getAllFabricas);
router.get("/:id", controller.getFabricaById);
router.patch("/:id", controller.updateFabrica);
router.delete("/:id", controller.deleteFabrica);


module.exports = router; 