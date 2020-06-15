import React from "react";
import Vcarousel from "../multiplexing/Carousel/carousel";
import content from "../../data/body/bodyContent/body-content1.json";//展示数据来源

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
                list:[]
            }
            
        }
    }
    render(){
        return (
            <div className="body-content1">
                {/*第一排 width:550px height:242px*/} 
                <div className="body-content1-top">
                    <div className="body-content1-top-carousel"></div>
                    <div className="body-content1-top-list"></div>
                </div>
                {/*第二排*/} 
                <div className="body-content1-bottom"></div>
            </div>
        )
    }
}