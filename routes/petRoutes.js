const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.get("/pet", petController.getPet);
router.post("/pet", petController.createPet);
router.post("/pet/feed", petController.feedPet);
router.post("/pet/heal", petController.healPet);
router.post("/pet/play", petController.playWithPet);

module.exports = router;
