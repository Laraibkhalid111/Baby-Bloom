import Product from "../models/product.js";
export const productController = (req, res) => {
    console.log("POST request received at /AddProduct");
    console.log("request body", req.body);
    res.send("Add Product endpoint reached");

    const { productName, productDescription, productPrice, productStock } = req.body;
    const newProduct = new Product({
        pid: productId,
        pname: productName,
        pdescription: productDescription,
        pprice: productPrice,
    
    });

    newProduct.save()
        .then(() => {
            console.log("Product added successfully");
            res.status(201).json({ message: "Product added successfully" });
        })
        .catch((error) => {
            console.error("Error adding product:", error);
            res.status(500).json({ message: "Error adding product", error });
        });
};
 export default productController;

