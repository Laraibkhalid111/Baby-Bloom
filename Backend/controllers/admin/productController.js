import Product from "../../models/admin/product.js";
export const productController = async (req, res) => {
    console.log("POST request received at /AddProduct");
    console.log("request body", req.body);

    const { productName, productCategory, productDescription, productPrice, productStock } = req.body;
    const newProduct = new Product({
        pname: productName,
        pcategory: productCategory,
        pdescription: productDescription,
        pprice: productPrice,
        pstock: productStock,
    });

    try {
        await newProduct.save();
        console.log("Product added successfully");
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Error adding product", error });
    }
};
 export default productController;
