import  React from "react";
import {Tooltip} from "antd";
import {LeftOutlined,RightOutlined} from "@ant-design/icons";

export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //gg:广告，prev:上一页，next:下一页watch-later:稍后再看
            type:props.type || "gg"
        }
    }
    getIcon(){
        switch(this.state.type){
            case "prev":
                return <LeftOutlined />
            case "next":
                return <RightOutlined />
            default:
                return null;
        }
    }
    render(){
        return (
            this.state.type == "watch-later"
            ?
            <Tooltip  overlayClassName="watch-later-tip" title="稍后再看" arrowPointAtCenter={true} color="grey">
                <i className={this.state.type}>
                    {this.getIcon()}
                </i>
            </Tooltip>
            :
            <i className={this.state.type}>
                {this.getIcon()}
            </i>
        )
            
        
    }
}