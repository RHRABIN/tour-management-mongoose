const express = require("express");
const router = express.Router();

const tourController = require("../controllers/tour.controller");

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router.route("/trending").get(tourController.trendingTour);
router.route("/cheapest").get(tourController.cheapestTour);

router
  .route("/:id")
  .get(tourController.getSingleTour)
  .patch(tourController.updateSingleTour);

module.exports = router;
