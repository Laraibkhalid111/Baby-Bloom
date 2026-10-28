 import axios from "axios";

export async function addProductAxiosFunction(data) {
  console.log("addProductAxiosFunction called");
  return await axios.post("http://localhost:3000/AddProduct", data);
}

