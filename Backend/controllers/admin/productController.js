
import Product from "../../models/admin/product.js";

// ADD PRODUCT
export const productController = (req, res) => {
  const {
    productName,
    productCategory,
    productDescription,
    productPrice,
    productStock
  } = req.body;

  const newProduct = new Product({
    pname: productName,
    pcategory: productCategory,
    pdescription: productDescription,
    pprice: productPrice,
    pstock: productStock
  });

  newProduct.save()
    .then(() => res.status(201).send("Product added successfully"))
    .catch((error) => res.status(500).send("Error adding product: " + error));
};


// UPDATE PRODUCT
export const editProductController = (req, res) => {
  const {
    product,
    productName,
    category,
    description,
    price,
    stockQuantity
  } = req.body;

  Product.findOneAndUpdate(
    { _id: product },
    {
      pname: productName,
      pcategory: category,
      pdescription: description,
      pprice: price,
      pstock: stockQuantity
    },
    { runValidators: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.status(200).send("Product updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating product: " + error));
};


// DELETE PRODUCT
export const deleteProductController = (req, res) => {
  const { productId } = req.body;

  Product.findOneAndDelete({ _id: productId })
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.status(200).send("Product deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting product: " + error));
};
