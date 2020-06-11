/*
头部底部栏目菜单
*/ 
import React from "react";
import {List}  from "antd";
import {HomeOutlined,BarChartOutlined } from "@ant-design/icons";


export default class HeaderBottomMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftMenu:[
                {"title":"首页","icon":<HomeOutlined   />,
                style:{background:"#ff5c7c",fontSize:"22px",}},
                {"title":"动态","icon":<img src={require("../../img/topmenu.webp")} />},
                {"title":"排行榜","icon":<BarChartOutlined />,
                style:{background:"#00a1d6",fontSize:"22px"}},
                {"title":"频道","icon":<img src={require("../../img/topmenu2.webp")} />},
            ],
            right:[{}]
        }
    }
    render(){
        const leftMenu = (
            this.state.leftMenu.map(item=>{
            return <li><a><div style={item.style}>{item.icon}</div><span>{item.title}</span></a></li>
            })
        )
        return (
            <div >
                <ul className="leftMenu" >{leftMenu}</ul>
                <ul></ul>
                <ul className="rightMenu"></ul>
            </div>
        )
    }
}