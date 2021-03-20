class ProductController {
  constructor() {}

  /**
   * Get all products
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getAll = async (req, res, next) => {
    try {
      const products = [
        { id: 1, name: "notebook" },
        { id: 2, name: "mouse" },
        { id: 3, name: "tv" },
        { id: 4, name: "keyboard" },
        { id: 5, name: "printer" },
      ];
      res.status(200).json(products);
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Internal server error" });
    }
  };

  /**
   *  Get one product by id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getById = async (req, res, next) => {
    try {
      const product = { id: req.params.id, name: "notebook" };
      res.status(200).json(product);
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Internal server error" });
    }
  };

  /**
   *  creates a product
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  create = async (req, res, next) => {
    try {
      const product = { ...req.body };
      res.status(201).json(product);
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Internal server error" });
    }
  };

  /**
   * updates a product
   * @param {*} req
   * @param {*} res
   */
  update = async (req, res) => {
    try {
      const product = { ...req.body };
      res
        .status(200)
        .json({ message: `product with id ${req.params.id} edited`, product });
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Internal server error" });
    }
  };

  /**
   * Deletes a product
   * @param {*} req
   * @param {*} res
   */
  delete = async (req, res, next) => {
    try {
      if (req.params.id > 5) {
        throw new Error("Bad ID");
      }
      res
        .status(200)
        .json({ message: `product with id ${req.params.id} deleted` });
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Internal server error" });
    }
  };
}

module.exports = ProductController;
