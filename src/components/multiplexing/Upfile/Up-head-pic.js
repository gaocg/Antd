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
            crop            :   false,                                  //是否支持图片裁剪                  
            accept          :   this.props.config.accept || "",         //上传文件类型
            action          :   this.props.config.action || "",         //上传地址
            method          :   this.props.config.method || "post",     //上传请求的方式
            directory       :   this.props.config.directory || false,   //是否支持上传文件夹     
            beforeUpload    :   this.props.config.beforeUpload || this.beforeUpload, //上传之前的钩子函数
            customRequest   :   this.props.config.customRequest,        //自定义上传行为(覆盖默认上传行为)
            data            :   this.props.config.data,                 //上传功能需要的额外参数         
            listType        :   this.props.config.listType || "picture-card",
            showUploadList  :   this.props.config.showUploadList || false,
            onChange        :   this.props.config.onChange || this.onchange,
            className       :   this.props.config.className,            //gcg-circle 代表圆形                   //自定义class
            rotate          :   this.props.config.rotate,               //是否有旋转功能
            style           :   this.props.config.style                 //自定义样式       
        };
        const upbutton = (
            this.state.load == 0 ? <PlusOutlined/> :
            this.state.load == 1 ? <LoadingOutlined /> :
            <img src={this.state.imgUrl} />
        );
        const upload = (this.props.config.crop 
        ?
        <ImgCrop rotate = {this.props.config.rotate}>
                <Upload  {...config}>
                    {upbutton}
                </Upload>
        </ImgCrop>
        :
        <Upload  {...config}>
            {upbutton}
        </Upload>
        );
        return (
            <div style={this.props.config.style} className={this.props.config.className}>
                {upload}
            </div>
            
        )
    }
}