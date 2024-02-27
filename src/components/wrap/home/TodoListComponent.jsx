import React from 'react';

export default function TodoListComponent( { todos, dispatchTodo }) {
  
  // todo 삭제 이벤트
  const onClickRemove = (e) => {
    console.log(e.target.id);
    dispatchTodo({type: "DELETE_TODO", id: e.target.id});
  }

  return (
    <ul className="todo__list">
      {todos.map((item, idx) => {
        return (
          <li key={idx} className="todo__item">
            <p>{item.text}</p>
            <button type="button" id={item.id} onClick={onClickRemove}>delete</button>
          </li>
        );
      })}
    </ul>
  )
}
