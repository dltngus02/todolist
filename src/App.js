
import { useState,Component,useRef, useReducer, useCallback} from 'react';
import React from "react";
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TestComp from './component/TestComp'

function reducer(state,action){

  switch (action.type){
    case "CREATE":{
      return [action.newItem, ...state];
    }
    case "UPDATE":{
      return state.map((it)=> it.id === action.targetId ? {
        ...it,
        isDone: !it.isDone,
      } : it );
    }
    case "DELETE":{
      return state.filter((it)=> it.id !==action.targetId);
    }
    default: {
      return state;
    }
  }

}
function App() {

  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content : "React 공부하기",
      createDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content : "빨래",
      createDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content : "노래 연습",
      createDate: new Date().getTime(),
    },
  ];
  const [todo,dispatch] = useReducer(reducer,mockTodo);

  const idRef = useRef(3);
  const onCreate = (content) =>{
    dispatch({
      type: "CREATE",
      newItem:{
        id : idRef.current,
        content,
        isDone : false,
        createDate : new Date().getTime(),
      },
    });
    idRef.current += 1;
  }

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : "UPDATE",
      targetId,
    });
  },[]);
  const onDelete = useCallback((targetId) =>{
    dispatch({
      type: "DELETE",
      targetId,
    });
  },[]);

  const TodoContext = React.createContext();
  return (
    <div className="App">
      {/* <TestComp></TestComp> */}
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList onDelete={onDelete} todo={todo} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
