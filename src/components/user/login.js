//登录组件
import {Input,Space,Button,Checkbox ,Form} from 'antd';
import { StarOutlined, TableOutlined, UserOutlined} from "@ant-design/icons";
import React from 'react';

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
          type: "",
        };
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
        this.setState({"type":type});
    }
    render(){
        return(
        <Space direction="vertical" size="middle">
            <Form {...layout}>
            <Form.Item name="note" colon={true} label="Note" rules={[
            {
              required: true,
            },
          ]}>
          <Input /></Form.Item>
            </Form>
            

            <Form.Item  required='true'>
                <Input prefix={<UserOutlined/>} placeholder="User Name" value={this.state.type}/>
                <Input.Password prefix ={<TableOutlined/>} placeholder="Pass Word"/>
                {/*block属性代表跟随父元素宽度*/}
                <Checkbox>Remember me</Checkbox>
                <Button type="primary" block onClick={()=>this.handleClick(0)}>submit</Button>
                <Button block onClick={()=>this.handleClick(1)}>regiter</Button>
            </Form.Item>
        </Space>
    
        )}
    }
export default Login;