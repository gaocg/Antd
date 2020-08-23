import React ,{useRef} from "react";
import Modal from "./Modal";

function EditModal(props){
    //接收父组件传的 展示状态、展示数据、及提交方法
    const { isShowEditModal , data,submitEdit } = props,
    inputRef = useRef(),
    checkRef =  useRef();

    const formNewData = ()=>{
        const val = inputRef.current.value.trim();//取值
        if(val.length === 0){
            inputRef.current.value = data.content;
            return;
        }
        const newData = {
            id:new Date().getTime(),
            content:val,
            completed:checkRef.current.checked
        }
        submitEdit(newData,data.id);//调用父组件提交方法
    }

    return (
        <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
            <p className="topic">
                <textarea  ref={inputRef} defaultValue={data.content} className="text-area"></textarea>
            </p>
            <p className="topic">
                状态：<input type="checkbox" 
                defaultChecked={data.completed?true:false}
                ref={checkRef}/>
            </p>
            <button className="btn edit" onClick={formNewData}>
                提交
            </button>
        </Modal>
    )
}

export default EditModal;

