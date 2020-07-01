import React from "react";
import {Layout} from "antd";
import { Link } from 'react-router-dom';
import userInfo from "../../data/user.json";
import HeaderTopMenu from "./Header-topMenu";
import HeaderBottomMenu from "./Header-bottomMenu";

import topMenu from "../../data/header-topMenu.json";
import bottomMenu from "../../data/header-bottomMenu.json";
const { Header,  Content } = Layout;
export default class header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topMenu:topMenu
        }
    }
    render(){
        return (
            <Layout>
                <Header className="header-top">
                    <HeaderTopMenu  data={this.state.topMenu}/>
                    <div className="header-top-mask"></div>
                    <div style={{position:"relative",margin:"0 auto","width":"80%"}}>
                        <a><img style={{width:"auto"}} src={require("../../img/Logo.png")}/></a>
                    </div>
                </Header>
                <Content className="header-bottomMenu">
                         <HeaderBottomMenu />
                </Content>
            </Layout>
        );
    }
}