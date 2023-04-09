import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomePage: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img src="https://bizweb.dktcdn.net/100/384/782/themes/764040/assets/slider_2.jpg?1617347076987" alt="" width={"100%"}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://cdn.tgdd.vn/hoi-dap/1355217/banner-tgdd-800x300.jpg" alt="" width={"100%"}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://imaxmobile.vn/media/data/banner/BANNER-5.png" alt="" width={"100%"}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg" alt="" width={"100%"}/>
      </h3>
    </div>
  </Carousel>
);

export default HomePage;