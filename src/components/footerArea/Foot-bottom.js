import React from"react";
import foot from "./Foot.css";

import Hook from "../multiplexing/hooks";
//import { RedditSquareFilled } from "@ant-design/icons";
console.log(foot)
export default class FootBottom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            changePic:{
                type:true,
                src1:require("../../img/footer/safe1.png"),
                src2:require("../../img/footer/safe.png")
            },
            text:[
                [
                    <a href="#">营业执照</a>,
                    "信息网络传播视听节目许可证：0910417",
                    "网络文化经营许可证 沪网文【2019】3804-274号",
                    "广播电视节目制作经营许可证：（沪）字第01248号",
                    "增值电信业务经营许可证 沪B2-20100043",
                    "互联网ICP备案",
                    <a href="">沪ICP备13002172号-3</a>
                ],

            ]
        }
    }
    changePic(){
        this.setState(state=>{
            state.changePic.type =  !state.changePic.type;
            return state.changePic.type;
        })
        setTimeout(()=>{
            this.changePic()
        },5000);
    }
    componentDidMount(){
        this.changePic()
    }
    render(){
        
        return(
            <div className="foot-bottom  flex flex-start align-start">
                <div className="foot-bottom-left" >
                    <img src={require("../../img/footer/partner.png")} />
                    <img src={require("../../img/footer/pic962110.png")} />
                    <a href=""><img src={this.state.changePic.type ? this.state.changePic.src1 : this.state.changePic.src2} />
                    </a>
                </div>

                <div className="foot-bottom-right">
                    {this.state.text.map((item,index)=>{
                        return (
                            <p style={{fontSize:12}} key={index}>
                                {item.map((ctx,index)=>{
                                   return <span key={index}>{ctx}</span>
                                })}
                            </p>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}