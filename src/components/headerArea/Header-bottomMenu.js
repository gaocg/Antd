/*
头部底部栏目菜单
*/ 
import React from "react";
import {List,Popover}  from "antd";
import {HomeOutlined,BarChartOutlined,BankFilled,AndroidOutlined,CrownOutlined, 
    VideoCameraOutlined,AppstoreFilled, SettingOutlined } from "@ant-design/icons";
import bottomMenu from "../../data/header-bottomMenu.json";

export default class HeaderBottomMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            placement:"",
            leftMenu:[
                {"title":"首页","icon":<HomeOutlined   />,
                style:{background:"#ff5c7c",fontSize:"22px",}},
                {"title":"动态","icon":<img src={require("../../img/topmenu.webp")} />},
                {"title":"排行榜","icon":<BarChartOutlined />,
                style:{background:"#00a1d6",fontSize:"22px"}},
                {"title":"频道","icon":<img src={require("../../img/topmenu2.webp")} />},
            ],
            rightMenu:[
                {"title":"专栏","icon":<BankFilled />},
                {"title":"直播","icon":<AndroidOutlined />,"children":{
                    "width":112,
                    "list":[
                    {"title":"全部"},{"title":"游戏"},{"title":"手游"},
                    {"title":"娱乐"},{"title":"电台"},{"title":"绘图"}
                ]}},
                {"title":"活动","icon":<CrownOutlined />},
                {"title":"课堂","icon":<VideoCameraOutlined />},
                {"title":"小黑屋","icon":<AppstoreFilled />},
                {"title":"音乐PLUS","icon":<SettingOutlined />},
            ]
        } 
    }
    computedWidth(){

    }
    popover(node,item){
        const list = item.children.list; 
        const content = (
            <div className="bottomMenu-poppver" style={{width:item.children.width-20}}>
                    {list.map((item,i)=>{
                      return  <a key={i}>{item.title}</a>
                    })}
            </div>
        );
        return <Popover content={content}>{node}</Popover>
    }
    render(){
        
        const leftMenu = (
            this.state.leftMenu.map((item,i)=>{
            return <li key={i}><a><div style={item.style}>{item.icon}</div><span style={{marginTop:8}}>{item.title}</span></a></li>
            })
        )
        const centerMenu = (
            bottomMenu.map((item,i)=>{
            return <span key={i} className="bottom-centerMenu">{item.children?this.popover(<a>{item.title}<em>{item.num}</em></a>,item):<a>{item.title}<em>{item.num}</em></a>}</span>
            })
        )
        const rightMenu = (
            this.state.rightMenu.map((item,i)=>{
                return <span key={i} className="bottom-rightMenu">
                    {item.children ?  this.popover(<a>{item.icon}<span>{item.title}</span></a>,item) :<a>{item.icon}<span>{item.title}</span></a> }
                    </span>
            })
        )
        return (
            <div >
                <div className="leftMenu" style={{minWidth:220,width:"20%",maxWidth:264}}><ul>{leftMenu}</ul></div>
                <span style={{borderLeft:"1px solid #e7e7e7",height:46,display:"inline-block",margin:"0 8px"}}></span>
                <div className="centerMenu" >{centerMenu}</div>
                <span style={{borderLeft:"1px solid #e7e7e7",height:46,display:"inline-block",margin:"0 8px"}}></span>
                <div className="rightMenu" style={{minWidth:220,width:"20%",maxWidth:290,flex:"0 0 auto"}}>{rightMenu}</div>
            </div>
        )
    }
}