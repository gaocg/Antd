import React from"react";
import "./Foot.css";
import FootTop from "./Foot-top";
import FootBottom from "./Foot-bottom";

export default class Foot extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="foot-box">
                <FootTop />
                <FootBottom />
            </div>
        )
    }
}