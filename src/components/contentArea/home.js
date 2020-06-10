import React from "react";
import Vcarousel from "../multiplexing/Carousel/carousel";
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carousel:{
                config:{
                    afterChange :   '',     //切换面板回调
                    beforeChange:   '',    //切换面板回调
                    autoplay    :   true,// 自动切换
                    dotPosition :   'bottom',     //面板指示点位置，可选 top bottom left right
                    dots        :   true,           //是否显示面板指示点，如果为 object 则同时可以指定 dotsClass 或者
                    easing      :   '',          //动画效果
                    effect      :   '',          //动画效果函数
                    //style       :   '',           //样式
                    className   :   ''        
                },
                list:[<img key="1" style={{width:"100%"}} src={require("../../img/gcg-bg.jpg")} />,<img key="2" style={{width:"100%"}} src={require("../../img/gcg-bg.jpg")} />,<img key="3" style={{width:"100%"}} src={require("../../img/gcg-bg.jpg")} />]
            }
            
        }
    }
    render(){
        return (
            <Vcarousel {...this.state.carousel}/>
        )
    }
}