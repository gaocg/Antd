import ImgCrop from "antd-img-crop";
import {Upload} from "antd";
import React from 'react';
import {LoadingOutlined,PlusOutlined } from "@ant-design/icons";

export default class Upheadpic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            load:0,
            imgUrl:''
        }
        this.onchange = this.onchange.bind(this);
    }
    onchange(file){
        this.setState({
          "load"  : 1
    });
        const read = new FileReader();
        read.readAsDataURL(file.file.originFileObj);
        read.onload = () =>{
            this.setState({
                "imgUrl":read.result,
                "load"  : 2
            });
        }
    }
    render(){
        //上传功能默认配置
        const config = {
            listType        :   this.props.config.listType || "picture-card",
            showUploadList  :   this.props.config.showUploadList || false,
            onChange        :   this.props.config.onChange || this.onchange,
            beforeUpload    :   this.props.config.beforeUpload || this.beforeUpload,
            action          :   this.props.config.action || ""
        };
        const upbutton = (
            this.state.load == 0 ? <PlusOutlined/> :
            this.state.load == 1 ? <LoadingOutlined /> :
            <img src={this.state.imgUrl} style={{ width: '100%' }}/>
        );
        return (
            <ImgCrop>
                <Upload  {...config}>
                    {upbutton}
                </Upload>
            </ImgCrop>
        )
    }
}