import React from "react";
import Icon from "../multiplexing/icon";
import "../../css/VdoPic.css";
/**
 * 根据传入的type 值 确定列表的展示效果
 */
export default class VdoPic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type:props.type,    //视图类型：vdo-mask：有遮罩层的视图
            title:props.title,  //视图标题
            up:props.up,        //up姓名
            url:props.url,      //图片地址
            play:props.play     //播放量
        }
    }

    render(){
        return (
            <div className="vdo-pic" style={{position:"relative",overflow:"hidden"}}>
                <img src={this.state.url} style={{width:"100%",height:"100%"}}/>
                <Icon  type="watch-later"/>
                {this.state.type == "vdo-mask" ?<div className="vdo-pic-mask"></div> : null}
                {/*鼠标悬浮展示详情*/}
                {this.state.type == "vdo-mask" 
                ?
                <div className="vdo-pic-tit" >
                    <p className="title" title={this.state.title}>{this.state.title}</p>
                    <p className="up"><i >up</i>{this.state.up}</p>
                    <p className="play">{this.state.play}</p>
                </div>
                :
                null
                }
                         
                
                
                {/*稍后再看图标*/}
                
            </div>
        )
    }
}