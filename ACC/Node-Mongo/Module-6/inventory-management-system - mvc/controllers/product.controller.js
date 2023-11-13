const { updateOne } = require("../models/Product");
const Product = require("../models/Product");
const {
  getProductsService,
  createProductService,
  updateProductService,
  bulkProductUpdateService,
  deleteProductByIdService,
  bulkDeleteProductService
} = require("../services/product.services");
const createProduct = async (req, res, next) => {
  try {
    // const product = new Product(req.body);
    // const result = await product.save();

    const result = await createProductService(req);
    res.status(200).json({
      status: "success",
      message: "Data successfully posted",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Data is not posted",
      error: err.message,
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const queryObject = {...req.query}; //copying the object

    //exclude -> sort, page, limit
    const excludeFields = ['sort', 'page', 'limit'];

    excludeFields.forEach(field => delete queryObject[field]); // queryObject theke sort, page, limit parameter gulo delete kore dicce.
    const products = await getProductsService(queryObject);
    res.send(products);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get the data",
      err: error.message,
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await updateProductService(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully updated the product",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get the data",
      err: error.message,
    });
  }
};

const bulkProductUpdate = async (req, res, next) => {
  try {

    const result = await bulkProductUpdateService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully updated the product",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get the data",
      err: error.message,
    });
  }
};


const deleteProductById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await deleteProductByIdService(id);
    res.status(200).json({
      status: "Success",
      message: "Successfully deleted the product",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot delete the product",
      err: error.message,
    });
  }
};


const bulkProductDelete = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await bulkDeleteProductService(req.body.ids);
    res.status(200).json({
      status: "Success",
      message: "Successfully deleted the products",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot delete the products",
      err: error.message,
    });
  }
};
module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  bulkProductUpdate,
  deleteProductById,
  bulkProductDelete
};
