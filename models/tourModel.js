const mongoose = require("mongoose");

// schema design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a nem for this service"],
      trim: true,
      minLength: [3, "Name must be al least 3 characters"],
      maxLength: [100, "Name is large"],
    },

    description: {
      type: String,
      required: [true, "Please provide a description for this service"],
    },

    location: {
      type: String,
      required: [true, "Please provide a location for this service"],
    },

    tourFee: {
      type: Number,
      required: [true, "Please provide a price for this service"],
      min: [0, "Price can't be negative"],
    },

    image: {
      type: String,
      required: [true, "Please provide an image for this service"],
    },

    visitedCount: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

const Tour = new mongoose.model("Tour", tourSchema);

module.exports = Tour;
