/*
*弹出层复用组件
*根据传入的content 展示内容 
*/

import React from "react";
import {Modal} from "antd";
export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible         :   this.props.visible  || false,        //是否展示
            title           :   this.props.title,
            onCancel        :   this.props.onCancel || this.onCancel.bind(this),      //关闭按钮
            content         :   this.props.content,//内容
            footer          :   this.props.footer   || null                       //底部按钮
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({...nextProps})
    }
    
    onCancel = (f)=>{
        this.setState(state=>{
            state.visible = false;
            return state;
        })
    }
    render(){
        return (
            <Modal {...this.state}>
                {this.state.content}
            </Modal>
        )
    }
}