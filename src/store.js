import {legacy_createStore} from 'redux';

const add_todo = "ADD_TODO";
const delete_todo = "DELETE_TODO";

const todoModifier = (state = [], action) => {
    switch(action.type){
        case add_todo:
            return [...state, {text: action.text, id: Date.now()}];
        case delete_todo:
            return state.filter(todo => todo.id !== parseInt(action.id));
        default:
            return state;
    }
};


const storeTodo = legacy_createStore(todoModifier);

storeTodo.subscribe(() => { console.log(storeTodo.getState()) });

export default storeTodo;