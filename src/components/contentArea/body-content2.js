import React from "react";
import {VideoCameraOutlined,SyncOutlined ,RightOutlined } from "@ant-design/icons";
import {Button} from "antd";
import VdoPic from "../multiplexing/VdoPic";
export default class bodyContent2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vdoList:[
                {"type":"vdo-live","player":"22","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"【战双帕弥什】「九龙环城」决战曲EP - Hikari","up":"战双帕弥什","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic3.webp"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"骁话一下：为什么中日韩一谈合作，钓鱼岛就出事儿？","up":"观察者网","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic1.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
                {"type":"vdo-live","player":"22","title":"耗时...算了白嫖吧！","up":"老番茄","play":"1.5万播放","url":require("../../img/body/bodyContent/vdo-pic2.jpg"),"bgImg":require("../../img/body/bodyContent/body-content1-carousel4.jpg")},
            ]
        }
    }
    render(){
        return (
            <div className="body-content2">
                <a className="body-content2-top"><img src={require("../../img/body/bodyContent/body-content2-top.jpg")}/></a>
                {/*第二排*/}
                <div className="body-content2-bottom content">
                    <div className="leftArea">
                        <header className="flex space-between content-header">
                            <div className="flex">
                                <VideoCameraOutlined style={{fontSize:32,marginRight:6,color:"#48CFE5"}}/>
                                <h4><a style={{fontSize:20}}>正在直播</a></h4>
                                <a className="cursor-auto">当前共有33333个在线直播</a>
                            </div>
                            <div>
                                <Button ><SyncOutlined className="spin"/>换一换</Button>
                                <Button>更多<RightOutlined className="more"/></Button>
                            </div>
                        </header>
                        <div className="space-between wrap-list">
                            {this.state.vdoList.map((item,index)=>{
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