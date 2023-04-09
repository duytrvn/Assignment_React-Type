import React from "react";
import { IProduct } from "../interface/product";
import { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";

interface IProps {
  products: IProduct[];
}
const ProductPage = (props: IProps) => {
  const [product, setProduct] = useState<IProduct[]>([]);

  // props là 1 object chứa products , products là mảng chứa objects khác
  /*
        {
            products: [
                {}
                {}
            ]
        }
    */
  useEffect(() => {
    setProduct(props.products);
  }, [props]);
  return (
    <div>
      <h1>Đây là trang Products Page</h1>
      <Row gutter={[16,0]}>
        {product.map((product) => (
          <a href={`/products/${product.id}`}>
            <div className="product">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%" }}
                />
                <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
                  {product.name}
                </h1>
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {product.price}
                </p>
            </div>
          </a>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
