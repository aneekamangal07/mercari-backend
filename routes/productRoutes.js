const express = require("express");
const router = express.Router();
const {
  sellProducts,
  getProductById,
  getProductByCategory,
  // test,
} = require("../controllers/productController");

router.get("/id/:id", getProductById);
router.get("/category/:category", getProductByCategory);
// router.get("/category", test);
router.post("/sell", sellProducts);

module.exports = router;
