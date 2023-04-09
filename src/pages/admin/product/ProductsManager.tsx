import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../interface/product';
import React from 'react';
import { Space, Table, Tag , Button , Pagination , Breadcrumb, message} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ButtonGroup from 'antd/es/button/button-group';


interface IProps {
  products: IProduct[];
  onRemove: (id: number) => void;
}

const ProductsManager = (props: IProps) => {
  const columns: ColumnsType<IProduct> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img width={"90px"} src={image}/>
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <p>{text}</p>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button.Group>
            
          <Button type="primary" danger onClick={() => removeProduct(record.id)}>Delete</Button>
          <Link to={`/admin/products/${record.id}/update`}>
          <Button type="primary" >Update</Button>
          </Link>
          
        </Button.Group>
      ),
    },
  ];
    
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    setProduct(props.products);
  }, [props]);

  const removeProduct = (id: number) => {
    let confirm = window.confirm('bạn chắc chắn chứ '); 
        if (confirm){
            props.onRemove(id)
            message.success('Xóa thành công')
        }
  };

  return (
    <div>
      <Breadcrumb
              items={[

                {
                  title: <a href="../../admin/products">Home</a>,
                },
                {
                  title: <a href="../../admin/products/add">Thêm Sản Phẩm</a>,
                },
              ]}
            />
      <h1>Quản Lý Sản Phẩm</h1>
      <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
      

      <Table<IProduct>
        dataSource={product}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
  
};

export default ProductsManager;
