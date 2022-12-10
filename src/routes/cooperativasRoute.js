const controller = require("../controllers/cooperativasController"); 
const express = require("express");
const router = express.Router();


router.post("/add", controller.addNewCooperativa);
router.get("/all", controller.getAllCooperativas);
router.get("/:id", controller.getCooperativaById);
router.get("/:id", controller.getCooperativaById);
router.patch("/:id", controller.updateCooperativa);
router.delete("/:id", controller.deleteCooperativa);



module.exports = router; 