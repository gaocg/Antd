//用户注册组件
import React from 'react';
import { Form, Input, Button, Checkbox,Row,Col, Tooltip,
    Select,
    InputNumber
 } from 'antd';
import {QuestionCircleOutlined} from "@ant-design/icons";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const {Option} = Select;
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    finish(v){
        console.log(v);
    }
    render(){
        const selectArea = (
            <Form.Item name="prefix" noStyle>
                <Select style={{width:70}}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );
        return(
            <Row>
                <Col  span={6} ></Col>
                <Col  span={12} >
                    <Form {...layout} initialValues={{prefix: '86'}} onFinishFailed={this.finish}>
                        <Form.Item label="用户名" name="userName" rules={[{required:true,message:"请输入用户名!"}]}>
                            <Input size="middle" placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item label="密码" name="password" rules={[{required:true,message:"密码!"}]} hasFeedback>
                            <Input.Password size="middle" placeholder="密码"/>
                        </Form.Item>
                        <Form.Item label="确认密码" name="confirm" dependencies={['password']} rules={[{required:true,message:"密码!"},
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),]} hasFeedback >
                            <Input.Password size="middle" placeholder="请确认密码"/>
                        </Form.Item>
                        <Form.Item name="nickName" label={<span>Nickname <Tooltip title="昵称"><QuestionCircleOutlined /></Tooltip></span>} 
                        rules={[{required:true,message:"请输入昵称", whitespace: true}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="E-mail" rules={[{"type":'email',message:'邮箱格式信息'},{required:true,message:"请输入邮箱"}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="mobile" label="mobile" rule={[{required:true,message:"输入手机"}]}>
                            <Input addonBefore={selectArea} style={{ width: '100%',}}/>
                        </Form.Item>
                        <Form.Item name={"age"} label="Age" min={1} max={10} rules={[{type:'number',min:0,max:99},{required:true,message:"InputNumber"}]}>
                                <InputNumber />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">submit</Button>
                        </Form.Item>
                        
                    </Form>
                </Col>
                <Col  span={6} ></Col>
            </Row>
        )}
}
export default Register;