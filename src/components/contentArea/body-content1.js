import React from "react";
import Vcarousel from "../multiplexing/Carousel/carousel";
import Icon from "../multiplexing/icon";
import VdoPic from "../multiplexing/VdoPic";
import {FireFilled,SoundFilled} from "@ant-design/icons";
export default class bodyContent1 extends React.Component{
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
            topList:{
                page:0,
                totalList:[

                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},

                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                        {"type":"vdo-mask","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                        {"type":"vdo-mask","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg")},
                ]
            },
            bottomList:[
                {"type":"vdo-progress","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari钓鱼岛就出事","up":"战双帕弥什","play":"1.5万播放","time":"04:09","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                {"type":"vdo-progress","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","time":"04:09","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                {"type":"vdo-progress","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari钓鱼岛就出事","up":"战双帕弥什","play":"1.5万播放","time":"04:09","url":require("../../img/body/bodyContent/vdo-pic1.jpg")},
                {"type":"vdo-progress","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari钓鱼岛就出事","up":"战双帕弥什","play":"1.5万播放","time":"04:09","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                {"type":"vdo-progress","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari钓鱼岛就出事","up":"战双帕弥什","play":"1.5万播放","time":"04:09","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
                {"type":"vdo-progress","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari钓鱼岛就出事","up":"战双帕弥什","play":"1.5万播放","time":"04:09","url":require("../../img/body/bodyContent/vdo-pic3.webp")},
            ]
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
    change(type){
      if(type){
        this.setState(state=>{
            state.topList.page++;
            return  state.topList.page;
        })
      }else{
        this.setState(state=>{
            state.topList.page--;
            return  state.topList.page;
        })
      }
    }
    render(){
        return (
            <div className="body-content1">
                {/*第一排 width:550px height:242px*/} 
                <div className="body-content1-top">
                    <div className="body-content1-top-carousel"><Vcarousel {...this.state.carousel}/></div>
                    <div className="body-content1-top-list" onMouseEnter={this.MouseEvent.bind(this)}  onMouseLeave={this.MouseLeave.bind(this)}>
                        {this.state.topList.totalList.map((item,index)=>{

                            return index>=Math.abs(this.state.topList.page%3) && index<Math.abs(this.state.topList.page%3)+10 ?<VdoPic key={index} {...item}/> :null
                        })}
                        {this.state.show ? <Icon type="prev" onClick={()=>this.change(0)}/> : ""}
                        {this.state.show ? <Icon type="next" onClick={()=>this.change(1)}/> : ""}
                    </div>
                </div>
                {/*第二排*/}
                <div className="body-content1-bottom content">
                    <div className="leftArea">
                        <header className="flex flex-start content-header">
                            <SoundFilled style={{fontSize:32,marginRight:6,color:"#FFD778"}}/>
                            <h4 >推广</h4>
                            <a ><FireFilled style={{fontSize:16,marginRight:6,color:"red"}}/>什么？统考已经开始了？</a>
                        </header>
                        <div className="flex space-between">
                            {this.state.bottomList.map((item,index)=>{
                                return <VdoPic key={index} {...item}/>
                            })}
                        </div>
                        
                    </div>
                    <div className="rightArea">
                        <h5 className="online-list">
                            <a>在线列表</a>
                        </h5>
                        <a > <img style={{width:"100%"}} src={require("../../img/body/bodyContent/content1-pic.jpg")}/></a>
                    </div>
                </div>
            </div>
        )
    }
}