import React from "react";
import "./App.css";
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import PrivateRoutes from "./Components/PrivateRoutes";
import SignIn from "./Container/Auth/SignIn";
import SignUp from "./Container/Auth/SignUp";
import { logout } from "./Container/Auth/AuthAction";
import Dashboard from "./Container/Main/Dashboard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { Layout, Menu, Button, theme } from "antd";
import Order from "./Container/Main/Order";
import Setting from "./Container/Main/Setting";
import { createBrowserHistory } from "history";
const { Header, Footer, Sider, Content } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#7dbcea",
};
function App(props) {
  const history = createBrowserHistory();
  // if (isDisconnected) {
  //   sessionStorage.clear();
  //   localStorage.clear();
  //    window.location.reload();
  // }

  const userDetail = sessionStorage.getItem("userDetails");

  return (
    <>
      <Layout>
        <Header
          style={{
            padding: 0,
            height: 80,
            backgroundColor: "#7dbcea",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex justify-between m-2 h-20 self-center">
            <div>
              <p className=" text-black font-bold text-lg">Header</p>
            </div>
            <div className="flex self-center h-10">
              <Button
                onClick={() => props.logout()}
                className=" bg-red-400 rounded-lg p-2 font-bold text-white"
              >
                Logout
              </Button>
            </div>
          </div>
        </Header>
        <Layout hasSider>
          <Sider trigger={null} className=" h-full" theme="light">
            {" "}
            <Menu
              theme="light"
              mode="inline"
              // className=" h-full"
              style={{ height: "90vh" }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["1"]}
            >
              <Menu.Item key="1" icon={<DashboardIcon />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DashboardIcon />}>
                <Link to="/orders">Orders</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CurrencyBitcoinOutlinedIcon />}>
                <Link to="/setting">Settings</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              margin: 5,
              height: "90vh",
              backgroundColor: "white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            className="shadow-lg h-screen m-1"
          >
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard />} path="/" exact />
                <Route path="/setting" element={<Setting />} />
                <Route path="/orders" element={<Order />} />
              </Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </>
  );
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
