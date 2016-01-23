import { ADD_TODO, COMPLETE_TODO } from '../constants/actionTypes';

let counter = 0;

export function addTodo(text){
  return {
    type: ADD_TODO,
    id: counter,
    text
  }
};

export function completeTodo(id){
  return {
    type: COMPLETE_TODO,
    id
  }
};
