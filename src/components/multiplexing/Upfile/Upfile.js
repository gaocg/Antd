/* 
  文件上传模块：提供多种上传功能,Upfile组件提供功能入口,具体功能由
  对应的子组件实现后续拓展功能只需新增对应子组件并根据条件引入即可,
  无需更改现有组件,功能模块由 type 判断。
  (功能组件命名规则):首字母大写中间由 - 隔开
    type:"headpic"    ==> 头像上传
    type:"piclist"    ==> 多图片上传
*/
import React from 'react';
import Upheadpic from "./Up-head-pic";
import Uppiclist from "./Up-pic-list";
import {message} from "antd";
import "./Upfile.scss";
export default class Upfile extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        config:this.props.config,
        next:true,
      }
     
  }
  componentWillReceiveProps(props){
    return props.config.fileList.length ? this.checkSize(props) : null;
  }
  shouldComponentUpdate(props,nextProps){
    return this.state.next;
  }
  checkSize = (props) =>{
    const list = props.config.fileList.slice(-1)[0].size;
    const size = props.config.size;
    const msg = "文件不能大于" + size + "M";
    if(list /1024/1024 > size){
      message.error(msg);
      this.setState(state=>{
        state.next = false;
        return state;
      });
    }
  }
  render(){
    //let config = this.props.config;
    let Upload;
    switch (this.props.config.type){
      case "headpic":
        Upload = Upheadpic;
        break;
      case "piclist":
        Upload = Uppiclist;
    }

    return (
        <Upload  config={this.state.config}/>
    )
  }
}