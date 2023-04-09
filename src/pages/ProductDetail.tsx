import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../api/product";
import { IProduct } from "../interface/product";
import "../css/ProductDetail.css";

interface RouteParams
  extends Record<string, string | undefined | number | undefined> {
  id: string | undefined | number | undefined;
}
//   interface RouteParams {
//     id: string | undefined;
//   }

const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    if (id) {
      getOne(id).then(({ data }: { data: IProduct }) => setProduct(data));
    }
  }, [id]);

  return (
    <div>
      <div className="home-product-detail">
        <div className="header-product-detail">
          <div className="img-detail">
          <img className="" src={`${product?.image}`} />
          </div>
          <div className="text-detail">
            <div className="nsx"></div>
            <h3>{product?.name}</h3>

            <div className = "amount"> 
                            <p>Số lượng</p>
                            <form> 
                                <button> - </button>
                                <input aria-label="quantity" className="input-qty" max="10" min="1" name="" type="number" value="1"/>
                                <button> + </button>
                            </form>
                        </div>
            <div className="btn-send">
              <button>chọn mua</button>
            </div>
          </div>
        </div>
      </div>

      <div className="describle">
        <h3>Mô tả sản phẩm</h3>
        <div>
          {product?.description}
          <p></p>
        </div>
      </div>
      <div className="btn-see-more">
        <button>Xem Thêm Nội Dung</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
