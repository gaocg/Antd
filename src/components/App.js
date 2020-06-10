import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Register from './user/user-register';
import Home from "./contentArea/home";
import Head from "./headerArea/Header";
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
          <Layout style={{height:'100%'}}>
            <Header style={{height:"288px"}}><Head/></Header>
              <Layout>
                <Sider width={"10%"} className="left-bg"></Sider> 
                <Content>
                  <Route path="/" exact component={Home} />
                  <Route path="/register" exact component={Register} />
                </Content>
                <Sider width={"10%"} className="right-bg">right</Sider>
              </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
}
