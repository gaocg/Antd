import React,{useState,useCallback,useEffect} from "react";
import ListHeader from "./ListHeader";
import AddInput from "./AddInput";
import TodoItem from "./TodoItem";
import CheckModal from "./CheckModal";
import EditModal from "./EditModal";
import "./base.css";
import FormItemInput from "antd/lib/form/FormItemInput";

function TodoLists(){

    const [isInputShow,setInputShow] = useState(true),      //添加框状态及修改方法
    [isShowCheckModal,setShowCheckModal] = useState(false), //查看框状态及修改方法
    [isShowEditModal,setShowEditModal] = useState(false),   //编辑框状态及修改方法
    [currentData,setCurrentData] = useState({}),            //选中的数据及修改方法
    [todoList,setTodoList] = useState([]);                  //展示的数据列表及修改方法

    //从localStorage中获得数据
    useEffect(()=>{ 
        const todoData = JSON.parse(localStorage.getItem("todoData") || '[]') ;
        setTodoList(todoData)
    },[]);
    //依赖：根据[]中的数据的变化执行该函数，这里todoList 有变化就更新数据到localStorage
    useEffect(()=>{
        localStorage.setItem("todoData",JSON.stringify(todoList))
    },[todoList])

    //添加新数据方法
    const addItem = useCallback((value)=>{
        const dataItem = {
            id:new Date().getTime(),
            content:value,
            completed:true
        };
        //新数据插入todoList 变量中
        setTodoList(todoList => [...todoList,dataItem]);
        //关闭添加框
        setInputShow(false)
    },[])

    //查看选中的数据
    const openCheckModal = useCallback((id)=>{
        setCurrentData(() => todoList.filter( item => item.id === id )[0] )
        setShowCheckModal(true)//弹窗显示
    },[todoList])

    //编辑选中的数据
    const openEditModal = useCallback((id)=>{
        
        setCurrentData(() => todoList.filter( item => item.id === id )[0] )
        setShowEditModal(true)//弹窗显示
    },[todoList])
    //提交数据
    const submitEdit = useCallback((newData,id)=>{
        setTodoList(todoList =>
            todoList.map( item =>{
                if(item.id === id){
                    item = newData;
                }
                return item;
            })
        )
       setShowEditModal(false)
    },[])

    //删除数据
    const deleteModal = useCallback((id)=>{
        console.log(id)
        setTodoList(() => todoList.filter( item => item.id !== id ) )
    },[todoList])
    return (
        <div className="todo-Modal">
            <CheckModal 
                isShowCheckModal={isShowCheckModal}
                data={currentData}
                closeModal= {()=>setShowCheckModal(false)}
             />
             <EditModal 
                isShowEditModal={isShowEditModal}
                data={currentData}
                submitEdit= {submitEdit}
             />
            <ListHeader openInput={()=>setInputShow(!isInputShow)}/>
            <AddInput addItem={addItem} isInputShow={isInputShow}/>
            <ul className="todo-list">
                {
                    
                    todoList.map((item,index)=>{
                        return (<TodoItem 
                            data={item} 
                            key={index}
                            openCheckModal={openCheckModal}
                            openEditModal={openEditModal}
                            deleteModal={deleteModal} />)
                    })
                }
            </ul>
        </div>
        
    )
}
export default TodoLists;