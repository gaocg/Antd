/*
列表形式展示上传图片
*/
import React from "react"; 
import {Upload} from "antd";
import {LoadingOutlined,PlusOutlined} from "@ant-design/icons";
import Dialog from "../Modal/Dialog";

export default class Uppiclist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            config:{
                accept                  :   this.props.config.accept || "",                                 //上传文件类型
                action                  :   this.props.config.action || "",                                 //上传地址
                method                  :   this.props.config.method || "post",                             //上传请求的方式
                directory               :   this.props.config.directory || false,                           //是否支持上传文件夹     
                beforeUpload            :   this.props.config.beforeUpload || this.beforeUpload.bind(this), //上传之前的钩子函数
                customRequest           :   this.props.config.customRequest,                                //自定义上传行为(覆盖默认上传行为)
                data                    :   this.props.config.data,                                         //上传功能需要的额外参数         
                defaultFileList         :   "",                                                             //默认已上传的文件列表
                disabled                :   false     ,                                                     //是否禁用
                fileList                :   [],                                                             //已上传的文件列表
                headers                 :   "",                                                             //上传请求头
                listType                :   this.props.config.listType || "picture-card",
                multiple                :   false,                                                          //是否支持多选文件
                name                    :   "file",                                                         //发到后台的文件参数名
                //previewFile             :   '',                                                      //自定义预览
                //isImageUrl            :   true,                                                           //自定义缩略图是否使用 <img /> 标签进行显示
                showUploadList          :   this.props.config.showUploadList || true,                       //是否展示文件列表
                withCredentials         :   false,                                                           //上传请求时是否携带 cookie
                openFileDialogOnClick   :   true,                                                             //是否打开文件对话框
                onChange                :   this.props.config.onChange || this.onChange.bind(this),
                onPreview               :   this.props.config.onPreview || this.onPreview,                  //点击文件链接或预览图的回调
                onRemove                :   this.props.config.onRemove || this.onRemove ,                //点击移除时的回调
                onDownload              :   undefined,                                                      //点击下载时的回调
                //transformFile         :   null,                                                           //上传之前转换文件
                iconRender              :   undefined,                                                      //自定义显示icon
                //组件自定义属性
                load                    :   false,
                className               :   this.props.config.className,                                    //gcg-circle 代表圆形 //自定义class
                style                   :   this.props.config.style,
                Change                  :   this.props.config.Change || "",
                num                     :   12,      
                size                    :   2
            },
            modal:{
                visible : false,        //是否展示
                title   :   "222",
                //onCancel:'',      //关闭按钮
                content : '',
                footer:null,
            }
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState(state=>{
            state.config.fileList = nextProps.config.fileList;
        })
    }
    onPreview = file=>{
        this.setState(state=>{
            state.modal.visible = true;
            state.modal.content = <img src={file.thumbUrl} />;
            state.modal.title = file.name;
            return state.modal;
        })
    }
    
    beforeUpload = file => {
    }
    onChange = file=>{
        console.log(file);
        if(file.file.status == "loading"){
            this.setState(state=>{
                state.config.load = true;
            })
        }   
        if(typeof this.state.config.Change == 'function'){
            this.state.config.Change(file);
        }        
    }
    render = ()=>{
        const upbutton = (
            this.state.config.load ? <LoadingOutlined /> : <PlusOutlined/> 
        );
        return (
            <div style={this.props.config.style} className={this.props.config.className}>{this.state.config.fileList.length}
                <Upload  {...this.state.config}>
                    {this.state.config.fileList.length < this.state.config.num ? upbutton : null}
                </Upload>
                <Dialog {...this.state.modal} />
                
            </div>
            
        )
    }
}