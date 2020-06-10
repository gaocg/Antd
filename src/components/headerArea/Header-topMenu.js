/*
顶部菜单
*/
import React from "react";
import {List,Input ,Button,Col,Popover} from "antd";
import {Link} from "react-router-dom";
import {AntDesignOutlined,MobileOutlined,SearchOutlined} from "@ant-design/icons";
const { Search } = Input;

export default class HeaderTopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            grid:{xs:10,sm:10,md:9.5,lg:9,xl:8.5,xxl:8},
            linkMenu:this.props.data.link,
            userMenu:this.props.data.user,
            width:""
        }
    }
    
    componentDidMount(){
        this.setState(state=>{
            state.width = document.body.offsetWidth;
            return state.width;
        })
     window.addEventListener('resize', ()=>{
        this.setState(state=>{
            state.width = document.body.offsetWidth;
            return state.width;
        })
     });

    }
    showIcon=(item)=>{
        switch(item){
            case "AntDesignOutlined":
                return <AntDesignOutlined style={{marginRight:6}}/>
            case "MobileOutlined":
                return <MobileOutlined   style={{marginRight:2}}/>
        }
    }
    render(){
        const LinkList = (
            <List style={{display:"inline-block",height:"100%"}} split={false} dataSource={this.state.linkMenu}
                renderItem={item => (
                <List.Item style={{float:"left",marginRight:12,lineHeight:"100%"}}>
                    <Link to={item.link}>{this.showIcon(item.icon)}{item.title}</Link>
                </List.Item>
            )} />
            
        );
        const search = (
            this.state.width <1100 
            ?
            <a><SearchOutlined style={{fontSize:20,paddingTop:10}}/></a> 
            :
            <Search placeholder="input search text" style={{width:this.state.width - 1000 >500 ? 500 :this.state.width - 1000 }} />
    
        );
        const userList = (
            <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <List style={{display:"inline-block",height:"100%"}} split={false} dataSource={this.state.userMenu}
                        renderItem={item => (
                        <Popover>
                            <List.Item style={{float:"left",marginRight:12,lineHeight:"100%"}}>
                                {item.headPic? <img src={require("../../img/gcg-bg.jpg")} style={{width:34,height:34,borderRadius:34,position:"relative",top:-12}} />: <Link to={item.link}>{this.showIcon(item.icon)}{item.title}</Link>}                        
                            </List.Item>
                        </Popover>
                    )} />
                <Button style={{width:100,background:"#fb7299",color:"#fff",border:"none",height:36}}>投稿</Button>
            </div>
        );
        return (
            <div className="header-topMenu">
                <Col style={{width:500}}>{LinkList}</Col>
                <Col >{search}</Col>
                <Col style={{width:454}}>{userList}</Col>
            </div>
        )
    }
}