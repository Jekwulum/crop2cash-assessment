const router = require('express').Router();
const FarmerController = require('../controllers/farmer.controller');

router.post("/", FarmerController.create);

router.get("/", FarmerController.getFarmer);

module.exports = router;