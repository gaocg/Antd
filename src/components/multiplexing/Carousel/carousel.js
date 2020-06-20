/*
    走马灯复用组件
config:{
    afterChange :   this.props.afterChange,     //切换面板回调
    beforeChange:   this.props.beforeChange,    //切换面板回调
    autoplay    :   this.props.autoplay || true,// 自动切换
    dotPosition :   this.props.dotPosition,     //面板指示点位置，可选 top bottom left right
    dots        :   this.props.dots,           //是否显示面板指示点，如果为 object 则同时可以指定 dotsClass 或者
    easing      :   this.props.easing,          //动画效果
    effect      :   this.props.effect,          //动画效果函数
    style       :   this.props.style,           //样式
    className   :   this.props.className        
},
list:[{"name":1},{"name":2},{"name":3}]         //数据列表
*/
import React from "react";
import {Carousel} from "antd";

export default class Acarousel extends React.Component{
    constructor(props){
        super(props);
        this.state={...this.props}
    }
    componentWillReceiveProps (props){
        this.setState({
            state:{...props}
        })
    }
    componentDidMount(){

    }
    render(){
         return (
             <Carousel {...this.state.config}>
                 {this.state.list}
             </Carousel>
         )
    }  
}