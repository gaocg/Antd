import  React from "react";
import {LeftOutlined,RightOutlined} from "@ant-design/icons";

export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type:props.type || "gg"//gg:广告，prev:上一页，next:下一页
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
            <i className={this.state.type}>
                {this.getIcon()}
            </i>
        )
            
        
    }
}