import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const editProductSchema = z.object({
  product: z.string().min(1, 'Product selection is required'),
  productName: z.string().trim().min(1, 'Product name is required'),
  category: z.string().min(1, 'Product category is required'),
  sizeWeight: z.string().trim().min(1, 'Product size is required'),
  description: z.string().trim().min(1, 'Product description is required'),
  price: z.coerce.number().min(0, 'Price must be a non-negative number'),
  stockQuantity: z.coerce.number().int().min(0, 'Stock quantity must be a non-negative integer'),
  productImage: z.any().optional()
})

function EditProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(editProductSchema) })

  function onSubmit(data) {
    console.log('form submitted', data)
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Edit a product in the catalogue</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="product" className="form-label fw-bold">
                      Select product
                    </label>
                    <select id="product" name="product" className="form-select" defaultValue="" {...register("product")}>
                      <option value="" disabled>
                        Select a product to edit
                      </option>
                      <option value="baby-shampoo">Baby Shampoo</option>
                      <option value="baby-lotion">Baby Lotion</option>
                      <option value="baby-oil">Baby Oil</option>
                      <option value="baby-powder">Baby Powder</option>
                    </select>
                    {errors.product && <span className="text-danger d-block">{errors.product.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="productName" className="form-label fw-bold">
                      Product name
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      className="form-control"
                      placeholder="Enter the product name" {...register("productName")} />
                    {errors.productName && <span className="text-danger d-block">{errors.productName.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label fw-bold">
                      Product category
                    </label>
                    <select id="category" name="category" className="form-select" defaultValue="" {...register("category")}>
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="baby-bath">Baby Bath</option>
                      <option value="baby-skin-care">Baby Skin Care</option>
                      <option value="baby-hair-care">Baby Hair Care</option>
                      <option value="baby-accessories">Baby Accessories</option>
                    </select>
                    {errors.category && <span className="text-danger d-block">{errors.category.message}</span>}
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
                      placeholder="For example, 250 ml or 1 pack" {...register("sizeWeight")} />
                    {errors.sizeWeight && <span className="text-danger d-block">{errors.sizeWeight.message}</span>}
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
                      placeholder="Update the product description"
                     {...register("description")}></textarea>
                    {errors.description && <span className="text-danger d-block">{errors.description.message}</span>}
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
                        step="0.01" {...register("price", { valueAsNumber: true })} />
                    {errors.price && <span className="text-danger d-block">{errors.price.message}</span>}
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
                      step="1" {...register("stockQuantity", { valueAsNumber: true })} />
                    {errors.stockQuantity && <span className="text-danger d-block">{errors.stockQuantity.message}</span>}
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
                      accept="image/*" {...register("productImage")} />
                    {errors.productImage && <span className="text-danger d-block">{errors.productImage.message}</span>}
                    <div className="form-text">Choose a new image only if you want to replace the current one.</div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct
