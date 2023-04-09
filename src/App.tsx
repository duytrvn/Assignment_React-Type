import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { getAll, addProduct, deleteProduct , updateProduct} from './api/product';
import ProductDetailPage from './pages/ProductDetail';
import Dashboard from './pages/admin/Dashboard';
import AddProductPage from './pages/admin/product/AddProducts';
import ProductsManager from './pages/admin/product/ProductsManager';
import { IProduct } from './interface/product';
import UpdateProductPage from './pages/admin/product/UpdateProduct';
import HomeLayout from './pages/layout/HomeLayout';
import AdminLayout from './pages/layout/AdminLayout';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getAll().then(({ data }) => setProducts(data));
  }, []);
  
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() =>
      setProducts(products.filter((item) => item.id !== id))
    );
  };
  
  const onHandleAdd = (product: IProduct) => {
    // addProduct(product).then(() => setProducts([...products, product]));
    addProduct(product).then(() => getAll().then(({data}) => setProducts(data)))
  };
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProducts(products.map(item => item.id === product.id ? product : item)))
  }


  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/products">
          <Route index element={<ProductPage products={products} />} />
          <Route path=":id" element={<ProductDetailPage />} />
        </Route>
      </Route>

      {/* admin */}
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<ProductsManager products={products} onRemove={onHandleRemove} />} />
          <Route path="add" element={<AddProductPage onAdd={onHandleAdd} />} />
          <Route path=':id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
