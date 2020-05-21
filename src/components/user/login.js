//登录组件
import {Input,Space,Card,Button, Checkbox ,Form,Layout,
  Row,Col,Tabs ,Select
} from 'antd';
import { StarOutlined, TableOutlined, UserOutlined} from "@ant-design/icons";
import React from 'react';
const {  Content } = Layout;
const {TabPane } = Tabs;
const {Option} = Select;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
 class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          v: 1,
          loginType:"1",
        };
        this.callback = this.callback.bind(this);
    }
    
    componentDidMount() {

    }
  
    componentWillUnmount() {

    }
    handleClick(type){
       if(type){
         
        this.props.history.push({
            pathname:'/register'
        });
       }
        //this.setState({"type":type});
    }
    finish(value){
      console.log(value);
    }
    finishFailed(err){
      console.log(err);
    }
    callback(v){
      console.log(v);
      this.setState({"loginType":v});
    }
    render(){
        return(
          <Layout className={"gcg-login-bg"}>
            <Content>
              <Row className={"gcg-margin-top25"}>
                <Col xs={11} sm={12} md={13} lg={14} xl={15} xxl={16}></Col>
                <Col xs={9} sm={8} md={7} lg={6} xl={5} xxl={4}>
                  {/*onFinish:提交表单且验证成功;onFinishFailed:验证失败回调;
                  onFieldsChange:字段更新时触发回调;onValuesChange:字段值更新触发*/}
                  <Form  onFinish={this.finish} onFinishFailed={this.finishFailed}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                      <TabPane tab="用户名登录" key="1">
                        <Form.Item name="username" valuePropName={this.state.loginType} rules={[{ required: this.state.loginType == 1 ? true : false,message:"请输入用户名" }]}>
                          <Input size="large" prefix ={<UserOutlined/>}  placeholder="User Name"/>
                        </Form.Item>
                        <Form.Item name="userpwd" rules={[{ required: this.state.loginType == 1 ? true : false,message:"请输入密码" }]}>
                          <Input.Password size="large" prefix ={<TableOutlined/>}  placeholder="请输入密码"/>
                        </Form.Item>
                      </TabPane>
                      <TabPane tab="手机登录" key="2">
                        <Form.Item name="userphone" rules={[{ required: this.state.loginType == 2 ? true : false,message:"请输入手机号码" }]}>
                        <Input.Group compact>
                        <Select defaultValue="Option1">
                          <Option value="Option1">Option1</Option>
                          <Option value="Option2">Option2</Option>
                        </Select>
                        <Input style={{ width: '50%' }} defaultValue="input content" />
                      </Input.Group>
 
                        </Form.Item>
                        <Form.Item name="checkcode" rules={[{ required: this.state.loginType == 2 ? true : false,message:"请输入验证码" }]}>
                          <Input.Password size="large" prefix ={<TableOutlined/>}  placeholder="check code"/>
                        </Form.Item>
                      </TabPane>
                    </Tabs>
                    
                    <Row >
                      <Col  span={12}>
                        <Form.Item name="remember" valuePropName="checked">
                          {/*block属性代表跟随父元素宽度*/}
                          <Checkbox  >记住密码</Checkbox>
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                      </Col>
                      <Col  span={8}>
                        <a  onClick={()=>alert("forget")}>忘记密码</a>
                      </Col>
                    </Row>
                    <Form.Item >
                    <Row>
                      <Col span={11}>
                        <Button  size="large" type="primary" block onClick={()=>this.handleClick(0)} htmlType="submit">submit</Button>
                      </Col>
                      <Col span={2}>
                      </Col>
                      <Col span={11}>
                        <Button size="large" block onClick={()=>this.handleClick(1)}>regiter</Button>
                      </Col>
                    </Row>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={4}></Col>
              </Row>
                      
            </Content>

          </Layout>
        
    
        )}
    }
export default Login;