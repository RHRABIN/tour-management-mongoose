const {
  getAllTourServices,
  createTourService,
  getSingleService,
  updateVisitedCountService,
  updateSingleTourService,
  getTrendingTourService,
  getCheapestTourService,
} = require("../services/tour.services");

exports.getAllTours = async (req, res, next) => {
  try {
    console.log(req.query);

    const queries = {};
    if (req.query.fields) {
      const filter = req.query.fields.split(",").join(" ");
      queries.fields = filter;
    }

    if (req.query.sort) {
      const sort = req.query.sort.split(",").join(" ");
      queries.sortBy = sort;
    }

    // page calculation
    if (req.query.page) {
      const { page = 1, limit = 2 } = req.query;

      const skip = (page - 1) * parseInt(limit);

      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const result = await getAllTourServices(queries);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail to load",
      message: "can't load data",
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail to insert",
      message: "can't insert data",
      error: error.message,
    });
  }
};

exports.getSingleTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getSingleService(id);

    result.visitedCount = result.visitedCount + 1;

    const data = await updateVisitedCountService(id, result);

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail to load",
      message: "can't load data",
      error: error.message,
    });
  }
};

exports.updateSingleTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    const result = await updateSingleTourService(id, data);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail to load",
      message: "can't load data",
      error: error.message,
    });
  }
};

exports.trendingTour = async (req, res, next) => {
  try {
    const result = await getTrendingTourService();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail to load",
      message: "can't load data",
      error: error.message,
    });
  }
};
exports.cheapestTour = async (req, res, next) => {
  try {
    const result = await getCheapestTourService();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail to load",
      message: "can't load data",
      error: error.message,
    });
  }
};
