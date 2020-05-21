import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Register from './user/user-register';

const { Header, Footer, Sider, Content } = Layout;
function App() {

 
  return (
    <BrowserRouter>
    <Route path="/login/:name" component={Login} />
      {/* <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
            <Link to="/login/lg" exact>login</Link>
            
            <Route path="/register" exact component={Register} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      <Sider>right</Sider>
    </Layout> */}

    </BrowserRouter>
  );
}

export default App;

