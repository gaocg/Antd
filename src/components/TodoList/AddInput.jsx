import React,{useRef} from "react";

function AddInput(props){
    const {isInputShow,addItem} = props;
    const inputRef = useRef();

    const submitValue = ()=>{
        const inputValue = inputRef.current.value.trim();
        if(inputValue.length === 0){
            return;
        }
        addItem(inputValue)
        inputRef.current.value = '';
    }

    return (
        <>
        {
            isInputShow 
            ?
            <div className="input-wrapper">
                <input type="text" ref={inputRef} />
                <button className="btn btn-primary" onClick={submitValue}>添加</button>
            </div>
            :""
        }
        </>
    )
}
export default AddInput;