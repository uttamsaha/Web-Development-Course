const Product = require("../models/Product");

const getProductsService = async (query) => {
  const products = await Product.find(query).sort('name price');
  return products;
};

const createProductService = async (req) => {
  const product = await Product.create(req.body);
  return product;
};

const updateProductService = async (id, data) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  //updateOne  method validation check kore na.. se jono runValidator true kore dite hoi.
};

const bulkProductUpdateService = async (data) => {
  const result = await Product.updateMany({ _id: data.ids }, data.data, {
    runValidators: true,
  }); // data ta ekhane update hobe

  //   const products = [];
  //   data.ids.forEach(product => {
  //     products.push(Product.updateOne({_id: product.id}, product.data))
  //   })
  //   const result  = await Promise.all(products);
  return result;
};


const deleteProductByIdService = async(id) => {
  const result = await Product.deleteOne({_id: id});
  return result;
}

const bulkDeleteProductService = async(ids) => {
  const result = await Product.deleteMany({_id: ids}) // ids is an array here. 
  return result;
}

 module.exports = {
  getProductsService,
  createProductService,
  updateProductService,
  bulkProductUpdateService,
  deleteProductByIdService,
  bulkDeleteProductService
};
