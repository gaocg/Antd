import React from"react";
import {Tooltip} from "antd";
import "./Foot.css";
import {DownloadOutlined,WeiboCircleOutlined,WechatOutlined} from "@ant-design/icons";

export default class FootTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list1:[
                {"title":"关于我们","url":""},
                {"title":"联系我们","url":""},
                {"title":"用户协议","url":""},
                {"title":"加入我们","url":""},
                {"title":"友情链接","url":""},
                {"title":"隐私政策","url":""},
                {"title":"bilibili认证","url":""},
                {"title":"Investor Relations","url":""},

            ],
            list2:[
                {"title":"帮助中心","url":""},
                {"title":"高级弹幕","url":""},
                {"title":"活动专题页","url":""},
                {"title":"侵权申诉","url":""},
                {"title":"活动中心","url":""},
                {"title":"用户反馈论坛","url":""},
                {"title":"壁纸站","url":""},
                {"title":"专车号服务中心","url":""},
                {"title":"名人堂","url":""}
            ],
            list3:[
                {"title":"客户端下载","url":"","QRCode":require("../../img/footer/biliapp_qrcode.png"),"icon":<DownloadOutlined style={{fontSize:40,borderRadius:40}} />},
                {"title":"新浪微博","url":"","QRCode":require("../../img/footer/weibo_qrcode.png"),"icon":<WeiboCircleOutlined style={{fontSize:40,borderRadius:40}} />},
                {"title":"官方微信","url":"","QRCode":require("../../img/footer/weixin_qrcode.gif"),"icon":<WechatOutlined style={{fontSize:40,borderRadius:40}} />},
            ]
        }
    }
    render(){
        return(
            <div className="foot-top flex space-between">
                <div className="foot-top-box">
                    <span>bilibili</span>
                    <ul>
                        {this.state.list1.map((item,index)=>{
                            return <li key={index}><a href={item.url}>{item.title}</a></li>
                        })}
                        
                    </ul>
                </div>
                <div className="foot-top-box">
                    <span>传送门</span>
                    <ul>
                        {this.state.list2.map((item,index)=>{
                            return <li key={index}><a href={item.url}>{item.title}</a></li>
                        })}
                        
                    </ul>
                </div>
                <div className="flex space-between foot-top-right">
                    {this.state.list3.map((item,index)=>{
                        return (
                        <Tooltip getPopupContaine={()=>document.getElementsByClassName("foot-top-right")} overlayClassName="foot-top-box-tip" key={index} title={<img src={item.QRCode} />}>
                            <a href={item.url} >
                                {item.icon}
                                <p style={{marginTop:10}}>{item.title}</p> 
                            </a>
                        </Tooltip>
                        )
                    })}
                        
                </div>
            </div>
        )
    }
}