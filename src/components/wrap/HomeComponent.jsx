import React from 'react';

export default function HomeComponent() {
  // todo 싱태 관리
  const [todo, setTodo] = React.useState("");
  // todo 변경 이벤트
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div id="home">
      <div className="container">
        <div className="gap">
          <div className="title"></div>
          <div className="content">
            <div className="todo__container">
              <label htmlFor="userTodo">What to do ?</label>
              <input id="userTodo" name="userTodo" type="text" value={todo} onChange={onChangeTodo} autoComplete='off' />
            </div>
            <div className="btn__container">
              <button className="add__btn" type="button">ADD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
