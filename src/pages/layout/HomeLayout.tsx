import React from 'react';
import { Breadcrumb, Layout, Menu, theme , Carousel} from 'antd';
import { Link, Outlet } from 'react-router-dom';
import "../../css/HomeLayout.css"

const { Header, Content, Footer } = Layout;

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const HomeLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDw8NDQ0NDg0NDw0ODQ8PDxANDQ0PFREWFhUSFRMYHiggGBolHRUTJTEiKjUrOjouFyAzODYsNygtMisBCgoKDQ0NDg8NDisZFRkrKy03Kys3KysrKzcrKysrLTcrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIDBwgGBQT/xABBEAACAgECAgYGBwUGBwAAAAAAAQIDBAURByEGEjFBUWETFCJxgZEjQkNScoKhCCQyYqKSsbLBwtEVMzRjc5Oj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDZhKIJRhpJkRjMiAsi6KIuioyIvEoi8QLouiiMiAlEkIkAAAAAAAAAAAAKXXQrjKyycYQit5TnJQhFeLk+SPE6txZ0HGbisqWTOPasat2x+E3tF/Bso9yD8mkahDKx6MutSjXk01XwU0lNRnFSSkk2t+Z+sgAACrKyLMqwKMxsyMpIDHIxsyMowKSKMuykiKqyCWQBBKIJQEmRGMyICyLooi6KjIjJExovEC6MiMaLpgWRJCJAAAAAAAAAHlenvTrE0epO36XKsTdGNF7Sn3deT+rDfv8AlufU6V69TpuHdnXc40x9iHY7bZPaFa9729y3fccma9rGRnZFuXlT6910m5PsjFd0YruilySKPodLOmWoapPr5l7dae9dEN4Y9X4Yd783u/M8+D03Dno/LUdTxsbq71KauyeW6VFbTnv7+UffJFR090SxJUadgUT/AI6sPEhPykqopr57n1QDKgAAqyrLMrICjKSLsxsCrMbLyMbAqyjLsoyKqyCWQBBKIAFkXiURaIGRFkURdFRkReJjRdAZUWRRFkBkRJVFgAAAAAAAAND/ALRGuSnkY2mxl9HRX6zau6Vs94w3/DFP/wBjNPHseL9rlrme33WVQXko0wS/uPldHeiWpajJRw8S2yLeztcepjw57Pe1+z8O3yNI+NVVKcowhGUpTajGMU5SlJvZJJdrbOm+EnQn/hWI7MiK9fy1GV/f6GC5xpT8Vvu/P3IwcOuF+NpbjlZDjk6htynt9BjN9qqT5t/zvn4Jc99hEAAEUDBDAhlGWZRgVZSRdmNgVkY2XkUYFWUZZlGRUEBgCAABZEoqiyAyJlkURZFRkiy6ZjiXQGVFkzHFl0wMiLJmNM/PqmpUYlFmVlWxqopj1rJy7l3JLtbb2SS5ttID9rf6dp4PpNxZ0fBbrhbLNujycMXacIvztb6vy3NQ8Q+JuXqkpUUOeNp/Yqk9rL1965rt/D2e/bc8AWI3BqHHnMe/qun4ta35emnbe9vy9Q/Ni8dtUUvpsPAsh4QjfVL4Sc5L9DVAKOiNA43aZe1DMpuwpvtn/wBTQn+KK6y/smx9N1LGyq/TYt9WRU/r1TjZFeT27H5HGB+rT9QyMafpca+6ixfXqslVP3bxZIOwLNFwZWO+WFiSvk05Wyx6pWyaWybm1u3sl8j8mv8ASrTNOj++ZdNLS9mrfr3Nfy1R3lt8NjmjK4h67bD0U9Uyup2PqzVc2vOcUpP5nmZzlJuUm5Sk25Nvdyb7W33iDeWuceKYtx0/Bnb2pW5M/RR37mq4btr4o8rdxt1yT3isKteEaG1/VJs1qCjaOHxy1eLXpaMG6P1l6OyuTXk4z2XyZ7Po9xw065qGdRbhSf2kX6zR8WkpL5M57AHaODm05Fcbse2u6ma3hZXJThL4ozM5I6IdL83Srldi2PqNr01Em3RfHwlHx8JLmjpnof0pxtVxY5WM9mvZuqk07KLNucX4rwfevilFfcbKMllZMgrJlGSykmBVlWSyrAqyrJkVZFQQSQAAAEkoqSgLxZdGNF0BdF0Y0WRUZUy6ZiTLpgZUc58ZOm0s/KeFjz/ccObitt9r71ylY/FLmo/F95t/id0gen6XkXQl1b7UsbHe+zVlm6cl5xipy/KcslxAAFAAAAAAAAAAAAAB+jBw7b7YUUVytttkoVwgt5Tk+xJHRnC3h9LSYzyL75Ty8iChZVXJrGqjun1dvtJJ/W82l4v8nBroRHBxo6hkQ/fcuClBSWzxseS3UV4Skub8tl477JbIIbKyYbKNkUbMbZaTKMCGVZLZRsioZVksgCAAAAAAkgAWRZMoi24GRMsmY0yyZRkTLpmIsmEab/aH1F9bAw0+SjdkzXi21CD/AEs+Zpo2Nx4t62rRX3MPHivjKcv9Rrk1iAAAAAAAAAAAAAAen4baGs/VMXGnHrUqfpr1yadVa6zi/KTSj+Y8wbV/Z6x08/LtfbXidVfnthu/6f1A342VbI3KtmVS2UbDZVsAyrY3KtgQ2VYZDIqGQSQAAAAAAAABIIAFkXTMZbcDImWTMaZZMI5846R21ff72Ljtf1L/ACNem0uP+Jtm4l/dbiuv412yb/SxGrTaAAAAAAAAAAAAAAbR/Z+ylHUcml/bYcmvOULYPb5OXyNXH3eg+t+oahi5j39HXYo3bb86Zpws5Lt2jJv3pAdXtlGyqmmlJNOLSaa5pp9jTDMqbkNjcq2AbKthsqRTchggAAAAAAAAAAAAAAkIgAXRKZTckDWnHrTvSYOPlJbvGvcJPwhbHt/tQh8zRR1T0w0r13T8vE23lbTL0f8A5Y+3X/VGJyu0axNQACoAAAAAAAAAAAAAN4cGunEbaoaVlzSuqXVwpyeytqX2W/3o93iuXdz2q2ceVzcWpRbUotOLTaaa7Gn3G3uhPF3qxjj6v1ntyhlwj1pbf92C5v8AEviu8m4rcbZVsxYuTXdXC2qcbKrIqdc4veM4vsaMm5lRsgEAAAAAAAAAAAAAAAAAAAAJIAFkzm7inoXqWp3KMdqcr95p8Npt9ePwkpcvDY6QPE8WejbzsB21R62Thda6pJbynXt9LBfBJpeMF4lxHOwANIAAAAAAAAAAAAAB+/QtMszMmjEq/jvthWn29VN+1J+SW7+B+A3BwM6N/wDN1W2PLaVGJv8A/Sxf4V+YDbWLjwqrrprXVrqhCuteEIpJL5IykAw0AAAAAAAAAAAAAAAAAAAAAAAAEkADn3iv0R9QyfWaY7YeXKUq0k+rRb2yq8l2uPluvqngzrDXNIozce3EyI71XR2bX8UJdsZx8JJ7M5n6U9HsjTsmeLkLdr2q7EtoXVvsnH/bue6NZqPjgAqAAAAAAAAABlxcey2cKqoSnZZKMIQit5Sk3skkB9Tol0ft1HLrxKuSl7V0+6qlNdaf6pLzaR07p2FVj01Y9EepTTCNdce3aKXe+997fizzvDzojDS8Xqy6ssu/aeVNdifdVF/dju/e934beqM7qgAIoAAAAAAAAAAAAAAAAAAAAAAAAAAB8XpZ0YxdTo9BkJqUd3TdFL0lM33rxT713/Jr7QA5o6U9BtR06UvS0ytoW/VyKU51NeMu+D8nt8TzKi3yXNvktubZ18Y40wT3UIJ+Kik/mWpHNmgdANWzWnXizqqf22RvRV71ut5L8KZsfRuDOHBKWbk3ZE++FW1FXu3e8n7+RtAgUjxy4X6D2epN+byMnf8ASZ83VOD+lWp+rzyMWe3Lafpq9/OM+b+aNhglHPPSHhdquJvKqpZtK32nj7ysS/mqftb+7f3ni76J1ycLITrku2M4uEl8GddCUU+1J+9blpHLGh9GdQzpKOJi22J9tnVcaYrxlY/ZRvHh/wAPqdMSvucb8+UdnYt/R0JrnGvfn75f3Lt9uQKQABFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z" alt="" />
        </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb
              items={[

                {
                  title: <a href="../">Home</a>,
                },
                {
                  title: <a href="../products">Sản Phẩm</a>,
                },
              ]}
            />
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>DuyTvPH19916@fpt.edu.vn 
      </Footer>
    </Layout>
  );
};

export default HomeLayout;