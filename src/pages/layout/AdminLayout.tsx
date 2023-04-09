import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, theme, Pagination , Breadcrumb} from "antd";

const { Header, Content, Footer, Sider } = Layout;

type Item = {
  key: string;
  icon?: React.ReactNode;
  children?: Item[];
  label: string;
  type?: string;
};

function getItem(
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: Item[],
  type?: string
): Item {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items: Item[] = [
  getItem("Darhboard ", "1"),
  getItem("Products", "2"),
  getItem("Option 3", "3"),
];

const AdminLayout: React.FC = () => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key={1}>
            <Link to={"/admin"}>Darhboard</Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link to={"/admin/products"}>ProductManagement</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
        
      </Layout>
      
    </Layout>
    
  );
};

export default AdminLayout;
