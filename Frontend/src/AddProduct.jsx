import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductAxiosFunction } from "./api";

const productSchema = z.object({
  productName: z.string().trim().min(1, "Product name is required"),
  productCategory: z.enum(["diapers", "clothing", "feeding", "bath-skincare", "baby-accessories"], { error: "Product category is required" }),
  productDescription: z.string().trim().min(1, "Product description is required"),
  productPrice: z.number().min(0.01, "Price must be greater than zero"),
  productStock: z.number().int().min(0, "Stock must be a non-negative integer"),
});

function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema)
  });
  
  
     async function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
    await addProductAxiosFunction(data);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Add a new product to the catalogue</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="productName" className="form-label fw-bold">
                      Product name
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      className="form-control"
                      placeholder="Enter the product name"
                      required {...register("productName", { required: true })}

                    />
                    {errors.productName &&(
                      <span className ="text-danger">Product name is required</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="productCategory" className="form-label fw-bold">
                      Product category
                    </label>
                    <select
                      id="productCategory"
                      className="form-select"
                      defaultValue=""
                      required {...register("productCategory", { required: true })}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="diapers">Diapers</option>
                      <option value="clothing">Clothing</option>
                      <option value="feeding">Feeding</option>
                      <option value="bath-skincare">Bath Skincare</option>
                      <option value="baby-accessories">Baby Accessories</option>
                    </select>
                    {errors.productCategory &&(
                      <span className ="text-danger">Product category is required</span>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="description" className="form-label fw-bold">
                      Product description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      rows="4"
                      placeholder="Describe the product"
                       required {...register("productDescription", { required: true })}

                    />
                    
                    {errors.productDescription &&(
                      <span className ="text-danger">Product description is required</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="price" className="form-label fw-bold">
                      Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">PKR</span>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="form-control"
                        placeholder="Enter the price"
                        min="0.01"
                        step="0.01"
                        required {...register("productPrice", { valueAsNumber: true })}

                    />
                      {errors.productPrice &&(
                      <span className ="text-danger">Price is required</span>
                    )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="stockQuantity" className="form-label fw-bold">
                      Stock quantity
                    </label>
                    <input
                      type="number"
                      id="stockQuantity"
                      name="stockQuantity"
                      className="form-control"
                      placeholder="Enter available quantity"
                      min="0"
                      step="1"
                      required {...register("productStock", { valueAsNumber: true })}

                    />
                      {errors.productStock &&(
                      <span className ="text-danger">Stock quantity is required</span>
                    )}
                  
                  </div>

                  <div className="col-12">
                    <label htmlFor="productImage" className="form-label fw-bold">
                      Product image
                    </label>
                    <input
                      type="file"
                      id="productImage"
                      name="productImage"
                      className="form-control"
                      accept="image/*"
                       {...register("productImage", { required: true })} 

                    />
                    {errors.productImage &&(
                      <span className ="text-danger">Product image is required</span>
                    )}
                  
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
