//用户注册组件
import React from 'react';
import { Form, Input, Button, Checkbox,Row,Col, Tooltip,
    Select, InputNumber,Upload
 } from 'antd';
 import ImgCrop from "antd-img-crop";
 import Upfile from "../multiplexing/Upfile/Upfile";
import {QuestionCircleOutlined,LoadingOutlined,PlusOutlined } from "@ant-design/icons";
const layout = {
    labelCol: { span: 6 },
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
        const config = {
            type:"headPic",
            
        };
        const selectArea = (
            <Form.Item name="prefix" noStyle>
                <Select style={{width:70}}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );

        return(
            <Row style={{marginTop:"20px"}}>
                <Col  xs={0} sm={1} md={2} lg={3} xl={4} xxl={5} ></Col>
                <Col  xs={20} sm={18} md={16} lg={14} xl={12} xxl={10} >
                    <Form {...layout} initialValues={{prefix: '86'}} onFinishFailed={this.finish}>
                        <Form.Item label="用户名" name="userName" rules={[{required:true,message:"请输入用户名!"}]}>
                            <Input size="middle" placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item label="密码" name="password" rules={[{required:true,message:"密码!"}]} hasFeedback>
                            <Input.Password size="middle" placeholder="密码"/>
                        </Form.Item>
                        <Form.Item label="确认密码"  name="confirm" dependencies={['password']} rules={[{required:true,message:"密码!"},
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
                        <Form.Item name="email" label="E-mail"  rules={[{"type":'email',message:'邮箱格式信息'},{required:true,message:"请输入邮箱"}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="mobile" label="mobile" getValueFromEvent={ (event)=> {return event.target.value.replace(/\D/g,'')}} rules={[{required:true,message:"输入手机",}]}>
                            <Input addonBefore={selectArea} style={{ width: '100%',}} maxLength="11"/>
                        </Form.Item>
                        <Form.Item name={"age"} label="Age" min={1} max={10} rules={[{type:'number',min:0,max:99},{required:true,message:"InputNumber"}]}>
                                <InputNumber />
                        </Form.Item>
                        <Form.Item style={{textAlign:"center"}}>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                        
                    </Form>
                </Col>
                <Col span={4}><div ><Upfile config={config}/></div></Col>
                <Col xs={0} sm={1} md={2} lg={3} xl={4} xxl={5}  >
                </Col>
            </Row>
        )}
}
export default Register;