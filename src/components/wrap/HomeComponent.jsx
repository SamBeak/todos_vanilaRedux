import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoListComponent from './home/TodoListComponent';

export default function HomeComponent( {todos, dispatchTodo} ) {
  todos = useSelector(state => state);
  dispatchTodo = useDispatch();
  // todo 싱태 관리
  const [todo, setTodo] = React.useState("");
  // todo 변경 이벤트
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  // todo Submit 이벤트
  const onSubmitTodo = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatchTodo({type: "ADD_TODO", text: todo});
    setTodo("");
  };
  return (
    <div id="home">
      <form className="container" onSubmit={onSubmitTodo}>
        <div className="gap">
          <div className="title"></div>
          <div className="content">
            <div className="todo__container">
              <label htmlFor="userTodo">What to do ?</label>
              <input id="userTodo" name="userTodo" type="text" value={todo} onChange={onChangeTodo} autoComplete='off' />
            </div>
            <div className="btn__container">
              <button className="add__btn" type="submit">ADD</button>
            </div>
          </div>
          <TodoListComponent todos={todos} dispatchTodo={dispatchTodo} />
        </div>
      </form>
    </div>
  )
}