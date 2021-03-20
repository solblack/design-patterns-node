const express = require("express");
const router = express.Router();
const { ProductController } = require("../controllers");
const productController = new ProductController();

router.get("", productController.getAll);
router.get("/:id", productController.getById);
router.post("", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
