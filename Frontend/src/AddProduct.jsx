import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  productName: z.string().min(1, "Product name is required").max(15, "Product name cannot exceed 15 characters"),
  productSize: z.string().min(1, "Product size is required").max(5, "Product size cannot exceed 5 characters"),
  productCategory: z.string().min(1, "Product category is required").max(20, "Product category cannot exceed 20 characters"),
  productDescription: z.string().min(1, "Product description is required").max(200, "Product description cannot exceed 200 characters"),
  productPrice: z.number().min(0, "Price must be a positive number").max(5 , "Price cannot exceed 5 characters"),
  productStock: z.number().min(0, "Stock must be a non-negative number").max(5, "Stock cannot exceed 5 characters"),
  productImage: z.any().refine(file => file instanceof File, "Product image is required").refine(file => !(file instanceof File) || file.size <= 5 * 1024 * 1024, "File size must be less than or equal to 5MB")
});

function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema)
  });
  
  function myFormSubmissionFucntion(data){
    console.log(" form submitted",data);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Add a new product to the catalogue</p>

              <form onSubmit={handleSubmit(myFormSubmissionFucntion)}>
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
                      {...register("productName", { required: true })} 

                    />
                    {errors.productName &&(
                      <span class ="text-danger">Product name is required</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label fw-bold">
                      Product category
                    </label>
                    <select
                      id="category"
                      className="form-select"
                      defaultValue=""
                      {...register("productCategory", { required: true })}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="baby-bath">Baby Bath</option>
                      <option value="baby-skin-care">Baby Skin Care</option>
                      <option value="baby-hair-care">Baby Hair Care</option>
                      <option value="baby-accessories">Baby Accessories</option>
                    </select>
                    {errors.productCategory &&(
                      <span class ="text-danger">Product category is required</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="sizeWeight" className="form-label fw-bold">
                      Product size / weight
                    </label>
                    <input
                      type="text"
                      id="sizeWeight"
                      name="sizeWeight"
                      className="form-control"
                      placeholder="For example, 250 ml or 1 pack"
                       {...register("productSize", { required: true })} 

                    />
                    {errors.productSize &&(
                      <span class ="text-danger">Product size is required</span>
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
                       {...register("productDescription", { required: true })} 

                    />
                    
                    {errors.productDescription &&(
                      <span class ="text-danger">Product description is required</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="price" className="form-label fw-bold">
                      Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="form-control"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                          {...register("productPrice", { valueAsNumber: true })}

                    />
                      {errors.productPrice &&(
                      <span class ="text-danger">Price is required</span>
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
                       {...register("productStock", { valueAsNumber: true })}

                    />
                      {errors.productStock &&(
                      <span class ="text-danger">Stock quantity is required</span>
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
                      <span class ="text-danger">Product image is required</span>
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
