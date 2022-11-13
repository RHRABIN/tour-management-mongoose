const { query } = require("express");
const Tour = require("../models/tourModel");

exports.getAllTourServices = async (queries) => {
  const services = await Tour.find()
    .select(queries.fields)
    .sort(queries.sortBy)
    .skip(queries.skip)
    .limit(queries.limit);
  const total = await Tour.countDocuments();
  const page = Math.ceil(total / queries.limit);
  return { total, page, services };
};
exports.createTourService = async (data) => {
  const service = await Tour.create(data);
  return service;
};

exports.getSingleService = async (id) => {
  const result = await Tour.findOne({ _id: id });
  return result;
};
exports.updateVisitedCountService = async (id, data) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  const updateData = await Tour.findOne({ _id: id });
  return updateData;
};

exports.updateSingleTourService = async (id, data) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );

  return result;
};

exports.getCheapestTourService = async () => {
  const result = await Tour.find().sort({ tourFee: 1 }).limit(3);

  return result;
};
