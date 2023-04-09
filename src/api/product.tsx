import instance from "./instance";

interface IProduct{
    id: number;
    name: string;
    price: number;
    description: string;
}
const getAll = ()=>{
    return instance.get("/products");
}
const getOne = (id:number)=>{
    return instance.get(`/products/${id}`);
}
const addProduct = (product:IProduct)=>{
    return instance.post("/products" , product);
}
const updateProduct = (product:IProduct)=>{
    return instance.put(`/products/${product.id}`,product);
}
const deleteProduct = (id:number)=>{
    return instance.delete(`/products/${id}`);
}
export {getAll,getOne,addProduct,deleteProduct,updateProduct}