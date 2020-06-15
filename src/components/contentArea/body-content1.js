import React from "react";
import Vcarousel from "../multiplexing/Carousel/carousel";
import Icon from "../multiplexing/icon";
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
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
                    //dots        :   {className:""},           //是否显示面板指示点，如果为 object 则同时可以指定 dotsClass 或者
                    easing      :   '',          //动画效果
                    effect      :   '',          //动画效果函数
                    //style       :   {"border-radius":"2px"},           //样式
                    className   :   ''        
                }, 
                list:[]
            },
            topCarousel:[
                {"title":"飞驰人生","type":"00","url":require("../../img/body/bodyContent/body-content1-carousel1.png")},
                {"title":"大制作猫片","type":"01","url":require("../../img/body/bodyContent/body-content1-carousel2.jpg")},
                {"title":"免费学英语","type":"00","url":require("../../img/body/bodyContent/body-content1-carousel3.jpg")},
                {"title":"大制作猫片2","type":"01","url":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"title":"免费学英语2","type":"00","url":require("../../img/body/bodyContent/body-content1-carousel5.jpg")}
            ],
            show:false,
            topList:[
                {"title":"飞驰人生","type":"00","url":require("../../img/body/bodyContent/body-content1-carousel1.png")},
                
            ],
            bottomList:[]
        }
    }
    componentWillMount(){
        this.state.topCarousel.map((item,i)=>{
            this.setState(state=>{
            state.carousel.list.push(<div key={i}><a><p className="flex" style={{position:"absolute",bottom:15,paddingLeft:15,color:"#fff"}}>{item.type == "01" ? <Icon />:""}{item.title}</p><img src={item.url} style={{width:"100%",height:"100%"}}/></a></div>)
            })
        })
    }
    MouseEvent(){
        this.setState({
            show:true
        })
    }
    MouseLeave(){
        this.setState({
            show:false
        })
    }
    render(){
        return (
            <div className="body-content1">
                {/*第一排 width:550px height:242px*/} 
                <div className="body-content1-top">
                    <div className="body-content1-top-carousel"><Vcarousel {...this.state.carousel}/></div>
                    <div className="body-content1-top-list" onMouseEnter={this.MouseEvent.bind(this)}  onMouseLeave={this.MouseLeave.bind(this)}>
                        {this.state.show ? <Icon type="prev" /> : ""}
                        {this.state.show ? <Icon type="next" /> : ""}
                        
                    </div>
                </div>
                {/*第二排*/} 
                <div className="body-content1-bottom"></div>
            </div>
        )
    }
}