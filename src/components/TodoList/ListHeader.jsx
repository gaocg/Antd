import React from "react";

function ListHeader(props){
    const {openInput} = props;

    return (
        <div className="header">
            <h1>事件代办</h1>
            <span className="icon" onClick={openInput}>+</span>
        </div>
    )
}
export default ListHeader;