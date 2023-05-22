import "./TodoItem.css"
import react from "react"
const TodoItem = ({onDelete, id, content, isDone, createDate, onUpdate }) => {
    const onChangeCheckbox = () =>{
        onUpdate(id);
    }
    const onClickDelete = () =>{
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <div className="check_col">
                <input onChange={onChangeCheckbox}checked={isDone} type="checkbox"></input>
            </div>
            <div className="title_col">
                {content}
            </div>
            <div className="date_col">
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div className = "btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}

export default react.memo(TodoItem);