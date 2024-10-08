import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    category: {
      type: String,
      required: [true, "Please enter product category"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    photos: [
      {
        public_id: {
          type: String,
          required: [true, "Please enter product url"],
        },
        url: {
          type: String,
          required: [true, "Please enter product url"],
        },
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
