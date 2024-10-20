const Product = require("../models/Product");

// Get recommendations based on user's cycle
// exports.getRecommendations = async (req, res) => {
//   const { email } = req.params;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const recommendations =
//       await recommendationService.getProductRecommendations(
//         user.menstrualCycleData
//       );
//     res.status(200).json({ recommendations });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

exports.getProductByCategory = async (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  try {
    const products = await Product.find({ category });
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

exports.sellProducts = async (req, res) => {
  const {
    name,
    description,
    category,
    brand,
    size,
    color,
    deals,
    price,
    availability,
    stock_quantity,
    image_url,
  } = req.body;

  try {
    const product = new Product({
      name,
      description,
      category,
      brand,
      size,
      color,
      deals,
      price,
      availability,
      stock_quantity,
      image_url,
    });

    await product.save();
    res.status(201).json({ message: "Product added", product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//get product by id
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
