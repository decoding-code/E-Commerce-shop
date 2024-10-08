import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      max: [250, "comment can not be more than 250 characters"],
    },
    rating: {
      type: Number,
      required: [true, "rating is required"],
      min: [1, "rating can not be less than 1"],
      max: [5, "rating can not be more than 5"],
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model("Review", reviewSchema);
