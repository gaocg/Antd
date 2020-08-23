import React from "react";

function TodoItem(props){
    //接收父组件传的 展示数据、查看方法、编辑方法、删除方法
    const {data,openCheckModal,openEditModal,deleteModal} = props;

    return (
        <li className="todo-item">
            <div className="check-box">
                <input type="checkbox" checked={data.completed} readOnly/>
            </div>
            <span className="todo-item-content" style={{'textDecoration':data.completed ? 'line':'none'}}>
                {data.content}
            </span>
            <div className="btn-group">
                <div className="btn btn-blue" onClick={()=>openCheckModal(data.id)}>查看</div>
                <div className="btn btn-yellow" onClick={()=>openEditModal(data.id)}>编辑</div>
                <div className="btn btn-red" onClick={()=>deleteModal(data.id)}>删除</div>
            </div>
        </li>
    )
}
export default TodoItem;