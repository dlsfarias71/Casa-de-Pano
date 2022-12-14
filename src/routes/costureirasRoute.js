const controller = require("../controllers/costureiraController"); 

const express = require("express");


const router = express.Router();


router.post("/add", controller.postNewCostureira);

router.get("/all", controller.getAllcostureiras);



router.get("/:id", controller.getCostureiraById);

router.patch("/:id", controller.updateCostureira);

router.delete("/:id", controller.deleteCostureira);




module.exports = router; 