import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Register from './user/user-register';

const { Header, Footer, Sider, Content } = Layout;
function App() {

 
  return (
    <BrowserRouter>
      <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
            <Link to="/login/lg" exact>login</Link>
            <Route path="/login/:name" component={Login} />
            <Route path="/register" exact component={Register} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      <Sider></Sider>
    </Layout>

    </BrowserRouter>
  );
}

export default App;

