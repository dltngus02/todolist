
import "./TodoEditor.css"
import {useState, useRef} from 'react';
const TodoEditor = ({onCreate}) =>{
    
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("")
    }
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    };

    const onKeyDown = (e) =>{
        if(e.keyCode === 13){
            onSubmit();
        }
    };
    return <div className="TodoEditor"> 
    <h4>새로운 todo 작성하기 🖋</h4>
    <div className="editor_wrapper">
        <input onKeyDown={onKeyDown} ref={inputRef} value={content} onChange={onChangeContent} placeholder="새로운 todo..."></input>
        <button onClick={onSubmit}>추가</button>
    </div>
    </div>
};

export default TodoEditor;