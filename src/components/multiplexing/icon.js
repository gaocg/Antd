import  React from "react";
import {Tooltip} from "antd";
import {LeftOutlined,RightOutlined} from "@ant-design/icons";

export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //gg:广告，prev:上一页，next:下一页watch-later:稍后再看
            type:props.type || "gg",
            status:0,
            title:["稍后再看","已加稍后再看","移除","已从稍后再看列表移除"]
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
    changeStatus(t){
        let s =0;
        if( t === 1 && (this.state.status === 1 || this.state.status === 2)){
            console.log("移出列表")
            s = 3;
        }else if( t === 1 && (this.state.status === 0 || this.state.status === 3)){
            console.log("已加列表")
            s = 1;
        }else if(t === 2 && (this.state.status === 1 || this.state.status === 2)){
            console.log("移出")
            s = 2;
        }else if(t === 2 && (this.state.status === 3 || this.state.status === 0)){
            console.log("稍后再看")
            s = 0;
        }
        this.setState(state=>{
            state.status = s;
            return state.status;
        })
    }
    render(){
        return (
            this.state.type == ("watch-later" || "watch-add")
            ?
            <Tooltip  overlayClassName="watch-later-tip" title={this.state.title[this.state.status]} arrowPointAtCenter={true} color="grey">
                <i className={[this.state.type,
                 this.state.status === 1 ?"watch-add": this.state.status === 2 ? "watch-add":null ]} onMouseEnter={()=>{this.changeStatus(2)}} onClick={()=>this.changeStatus(1)}>
                    {this.getIcon()}
                </i>
            </Tooltip>
            :
            <i className={this.state.type} {...this.props}>
                {this.getIcon()}
            </i>
        )
            
        
    }
}