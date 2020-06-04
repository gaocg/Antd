import React from "react";
import {Space,Avatar,Badge,PageHeader,Popover,List} from "antd";
import { Link } from 'react-router-dom';
export default class header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //list:[{"title":"1234"},{"title":"1234"},{"title":"1234"},{"title":"1234"}],
            userInfo:require("../data/user.json")
        }
    }
    render(){
        let content = (
            <List itemLayout="horizontal" dataSource={this.state.userInfo.list}
            renderItem={item =>(
                <List.Item>
                    <List.Item.Meta 
                        title={<a>{item.title}</a>}
                    />
                </List.Item>
            )} />
        );
        let user = (
            <div>
                <span>{this.state.userInfo.name}</span>
                <Link style={{"float":"right"}} to="/login">注销</Link>
            </div>
        );
        return (
            <Space align="center" size="large" className="head">
                <PageHeader   title="Antd-Design" subTitle="敲着玩的"/>
                <Popover title={user} content={content}>
                    <Badge count={1}>
                        <Avatar size="large"   src={this.state.userInfo.icon}></Avatar>
                    </Badge>
                </Popover>
            </Space>
        );
    }
}
