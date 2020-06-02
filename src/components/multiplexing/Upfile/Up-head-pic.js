import ImgCrop from "antd-img-crop";
import {Upload} from "antd";
import React from 'react';
import {LoadingOutlined,PlusOutlined } from "@ant-design/icons";

export default class Upheadpic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            load:0,
            imgUrl:'',
            //上传功能默认配置
            config : {
                crop                    :   this.props.config.crop || true,
                rotate                  :   true,
                accept                  :   this.props.config.accept || "",                                 //上传文件类型
                action                  :   this.props.config.action || "",                                 //上传地址
                method                  :   this.props.config.method || "post",                             //上传请求的方式
                directory               :   this.props.config.directory || false,                           //是否支持上传文件夹     
                beforeUpload            :   this.props.config.beforeUpload || this.beforeUpload.bind(this), //上传之前的钩子函数
                customRequest           :   this.props.config.customRequest,                                //自定义上传行为(覆盖默认上传行为)
                data                    :   this.props.config.data,                                         //上传功能需要的额外参数         
                defaultFileList         :   "",                                                             //默认已上传的文件列表
                disabled                :   false     ,                                                     //是否禁用
                fileList                :   "",                                                             //已上传的文件列表
                headers                 :   "",                                                             //上传请求头
                listType                :   this.props.config.listType || "picture-card",
                multiple                :   false,                                                          //是否支持多选文件
                name                    :   "file",                                                         //发到后台的文件参数名
                previewFile             :   undefined,                                                      //自定义预览
                //isImageUrl            :   true,                                                           //自定义缩略图是否使用 <img /> 标签进行显示
                showUploadList          :   this.props.config.showUploadList || true,                       //是否展示文件列表
                withCredentials         :   false,                                                           //上传请求时是否携带 cookie
                openFileDialogOnClick   :   true,                                                             //是否打开文件对话框
                onChange                :   this.props.config.onChange || this.onChange.bind(this),
                onPreview               :   undefined,                                                      //点击文件链接或预览图的回调
                onRemove                :   undefined,                                                      //点击移除时的回调
                onDownload              :   undefined,                                                      //点击下载时的回调
                //transformFile         :   null,                                                           //上传之前转换文件
                iconRender              :   undefined,                                                      //自定义显示icon
                className               :   this.props.config.className || "gcg-circle",                    //gcg-circle 代表圆形 //自定义class
                style                   :   this.props.config.style || {width:100,height:100},
            }
        }
        //this.onchange = this.onchange.bind(this);
    }
    onChange(file){
        this.setState({
          "load"  : 1
        });
        const read = new FileReader();
        read.readAsDataURL(file.file.originFileObj);
        read.onload = () =>{
            this.setState({
                imgUrl:read.result,
                load  : 2,
            });
        }
    }
    beforeUpload(){
        return true;
    }
    render(){
        const upbutton = (
            this.state.load == 0 ? <PlusOutlined/> :
            this.state.load == 1 ? <LoadingOutlined /> :
            <img  src={this.state.imgUrl} />
        );
        const upload = (this.state.config.crop 
        ?
        <ImgCrop rotate = {this.state.config.rotate}>
                <Upload  {...this.state.config}>
                    {upbutton}
                </Upload>
        </ImgCrop>
        :
        <Upload  {...this.state.config}>
            {upbutton}
        </Upload>
        );
        return (
            <div style={this.state.config.style} className={this.state.config.className}>
                {upload}
            </div>
            
        )
    }
}