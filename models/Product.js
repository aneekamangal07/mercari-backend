const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ["Small", "Medium", "Large"],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  deals: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  availability: {
    type: String,
    enum: ["In Stock", "Out of Stock"],
    default: "In Stock",
  },
  stock_quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  image_url: {
    type: String,
    required: true,
  },
  //   created_at: {
  //     type: Date,
  //     default: Date.now
  //   },
  //   updated_at: {
  //     type: Date,
  //     default: Date.now
  //   }
});

// Pre-save middleware to update 'updated_at' field
// productSchema.pre('save', function (next) {
//   this.updated_at = Date.now();
//   next();
// });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
