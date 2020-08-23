import React from "react";
import Modal from "./Modal";

function CheckModal(props){
     //接收父组件传的 展示状态、展示数据、及关闭方法
    const {isShowCheckModal,data,closeModal} = props;
    return (
        <Modal 
        isShowModal={isShowCheckModal}
        modalTitle="查看事件"
        >
            <p className="topic">{data.id}</p>
            <p className="topic">{data.content}</p>
            <p className="topic">{data.completed ? "已完成":"未完成"}</p>
            <button onClick={closeModal} className="btn blue">确定</button>
        </Modal>
    )
}

export default CheckModal;