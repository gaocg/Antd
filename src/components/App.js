import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Register from './user/user-register';
import Home from "./main/home";
import Head from "./header";
const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
    <BrowserRouter>
      <Switch>
      <Route path="/login" exact component={Login} />
        <Route path="/">
          <Layout>
            <Sider>Sider</Sider>
              <Layout>
                <Header><Head/></Header>
                <Content>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={Register} />
                </Content>
                <Footer>Footer</Footer>
              </Layout>
            <Sider>right</Sider>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
}
