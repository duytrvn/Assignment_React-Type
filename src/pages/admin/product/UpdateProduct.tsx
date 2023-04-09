import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Breadcrumb , message} from 'antd';
import { IProduct } from '../../../interface/product';



interface IProps {
  products: IProduct[];
  onUpdate: (data: IProduct) => void;
}

const UpdateProductPage  = (props:IProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();

  useEffect(() => {
    const currentProduct = props.products.find((item) => item.id === Number(id))
    reset(currentProduct);
  }, [props]);

  const onHandleSubmit = (data: IProduct) => {
    // console.log(data);
    
    props.onUpdate(data);
    message.success("Cập nhập thành công")
    navigate('/admin/products');
  };

  return (
    <div>
      <h1>Update sản phẩm</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        Tên Sản Phẩm : <br /><input style={{margin: "5px",padding:"5px"}} type="text" {...register('name')} /> <br />
        Giá : <br /><input style={{margin: "5px",padding:"5px"}} type="number" {...register('price')} /> <br />
        Ảnh: <br /><input  style={{margin: "5px",padding:"5px"}} type="text" {...register('image')} /> <br />
        Mô Tả: <br /><input style={{margin: "5px",padding:"5px"}} type="text" {...register('description')} /> <br />
        <button type="submit" style={{margin: "15px 33px",padding:"5px" , width:"120px" ,height:"30px"}}>Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
