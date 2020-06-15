import React from "react";
import "./body.css"
import BodyContent1 from "./body-content1";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div className="body">
                <BodyContent1 />
            </div>
        )
    }
}