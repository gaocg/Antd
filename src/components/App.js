import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Register from './user/user-register';
import Upfile from "./multiplexing/Upfile/Upfile";
import Home from "./main/home";

const { Header, Footer, Sider, Content } = Layout;
function App() {

 
  return (
    <BrowserRouter>
    <Route path="/login/:name" component={Login} />
    <Route path="/">
    <Layout>
      <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
              <Route path="/Home" component={Home} />
              <Route path="/Upfile" exact component={Upfile} />
              <Route path="/register" exact component={Register} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      <Sider>right</Sider>
    </Layout>
    </Route>
    </BrowserRouter>
  );
}

export default App;

