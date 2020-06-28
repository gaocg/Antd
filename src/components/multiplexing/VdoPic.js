import React from "react";
import Icon from "../multiplexing/icon";
import "../../css/VdoPic.css";
import Item from "antd/lib/list/Item";
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
            play:props.play,     //播放量
            time:props.time,
            assist:props.assist,   //点赞量

        }
    }
    render(){
        return (
            <div className="vdo-card">
                {
                this.state.type == "vdo-mask"//有遮罩的视图
                ?
                <div className="vdo-pic vdo-mask" style={{position:"relative",overflow:"hidden"}}>
                    <img className="vdo-pic-img" src={this.state.url} />
                    <Icon  type="watch-later"/>
                    <div className="vdo-pic-mask"></div>
                    {/*鼠标悬浮展示详情*/}
                    <div className="vdo-pic-tit" >
                        <p className="title" title={this.state.title}>{this.state.title}</p>
                        <p className="up"><i >up</i>{this.state.up}</p>
                        <p className="play">{this.state.play}</p>
                    </div>
                </div>
                :
                this.state.type == "vdo-progress"//有进度条的视图
                ?
                <div className=" vdo-progress">
                    <div style={{position:"relative"}}>
                        <img className="vdo-pic-img" src={this.state.url} />
                        <Icon  type="watch-later"/>
                        <div className="vdo-progress-count">
                            <div className="count-left">
                                <span>{this.state.play}</span>
                                <span>{this.state.assist}</span>
                            </div>
                            <div className="count-right"><span>{this.state.time}</span></div>
                        </div>
                    </div>
                    <a className="vdo-progress-title">{this.state.title}</a>
                    {this.state.up?<a className="vdo-progress-up"><i >up</i>{this.state.up}</a>:null}
                    
                </div>  
                :
                null
                }

            </div>
            
        )
    }
}