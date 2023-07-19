const router = require('express').Router();
const AppService = require('../services/app.service');
const FarmerController = require('../controllers/farmer.controller');

router.post("/", FarmerController.create);

router.get("/", AppService.formatGetQuery, FarmerController.getFarmer);

module.exports = router;