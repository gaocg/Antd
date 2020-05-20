//登录组件
import {Input,Space,Button } from 'antd';
import { StarOutlined, TableOutlined, UserOutlined} from "@ant-design/icons";
import React from 'react';

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
        this.props.history.push('/')
        this.setState({"type":type});
    }
    render(){
        return(
            
        <Space direction="vertical" size="middle">
            
                <Input prefix={<UserOutlined/>} placeholder="User Name" value={this.state.type}/>
                <Input.Password prefix ={<TableOutlined/>} placeholder="Pass Word"/>
                {/*block属性代表跟随父元素宽度*/}
                <Button type="primary" block onClick={()=>this.handleClick(0)}>submit</Button>
                <Button block onClick={()=>this.handleClick(1)}>regiter</Button>
        </Space>
    
    
            
            
        )}
    }
export default Login;