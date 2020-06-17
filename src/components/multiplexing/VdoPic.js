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
            url:this.props.url,
            type:"",
        }
    }
    render(){
        return (
            <div className="vdo-pic" style={{position:"relative",overflow:"hidden"}}>
                <img src={this.state.url} style={{width:"100%",height:"100%"}}/>
                {/*鼠标悬浮展示详情*/}
                <div className="vdo-pic-mask"></div>
                <div className="vdo-pic-tit" style={{position:"absolute",bottom:"calc()"}}>
                    <p className="title">为什么为什么为啥吗</p>
                    <p className="up"><i >up</i>观察者网</p>
                    <p className="play">1.5</p>
                </div>
                {/*稍后再看图标*/}
                <Icon  type="watch-later"/>
            </div>
        )
    }
}