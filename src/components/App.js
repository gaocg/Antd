import React from 'react';
import { Layout } from 'antd';
import Login from "./user/login";

const { Header, Footer, Sider, Content } = Layout;
function App() {

 
  return (
    <div >
      <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Layout>
            {/*登录注册模块*/ }
            <Sider  width="300px">
              <Login/>
            </Sider>
            {/*右侧走马灯 */}
            <Layout>
              <Content>
              </Content>
            </Layout>
            
          </Layout>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      <Sider>\</Sider>
    </Layout>
    </div>
  );
}

export default App;

