import {useState,useReducer} from "react";

function reducer(state,action) {
    if(action.type==="INCREASE"){
        return state + action.data;
    }
    if(action.type==="DECREASE"){
        return state - action.data;
    }
    else{
        return state;
    }
}
    
function TestComp(){
    const [count,dispatch] = useReducer(reducer,0);

    // const onIncrease = () => {
    //     setCount(count + 1);
    // };
    // const onDecrease = () => {
    //     setCount(count -1);
    // };
    return(
        <div>
            <h4>카운트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={()=>dispatch({type:"INCREASE",data:1})}>+</button>
                <button onClick={()=>dispatch({type:"DECREASE",data:1})}>-</button>
            </div>
        </div>
    );
}

export default TestComp;