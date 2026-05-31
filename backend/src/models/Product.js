import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    stock: {
      type: Number,
      required: true,
      default: 1
    },

    image: {
      type: String,
      required: true
    },

    category: {
      type: String,
      default: "general"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);