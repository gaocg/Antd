import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Register from './user/user-register';
import Body from "./contentArea/Body";
import Head from "./headerArea/Header";
const { Header, Footer, Content } = Layout;

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
            <Header style={{height:"288px"}}><Head/></Header>
              <Layout >
                <Content style={{background:"#fff"}}>
                  <Route path="/" exact component={Body} />
                  <Route path="/register" exact component={Register} />
                </Content>
              </Layout>
            <Footer>Footer</Footer>
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
}
