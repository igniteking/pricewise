import mongoose, { Mongoose } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    url: { type: String, require: true, unique: true },
    currency: { type: String, require: true },
    image: { type: String, require: true },
    title: { type: String, require: true },
    currentPrice: { type: Number, require: true },
    orignalPrice: { type: Number, require: true },
    priceHistory: [
      {
        prices: { type: Number, require: true },
        date: { type: Date, default: Date.now(), require: true },
      },
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    discountedRate: { type: Number },
    description: { type: String },
    category: { type: String },
    reviewCount: { type: Number },
    isoutOfStock: { type: Boolean, default: false },
    users: [{ email: { type: String, require: true } }],
    default: [],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
