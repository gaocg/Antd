import React,{useState} from "react";

export default function Example(){
    const [count,setCounts] = useState([1,2]);
    return (
        <div>
            <p>count={count.split(",")}</p>
            <button onClick={()=>setCounts(count.push(3))}>123</button>
        </div>
    )
}