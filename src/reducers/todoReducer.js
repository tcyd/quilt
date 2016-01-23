import { ADD_TODO, COMPLETE_TODO } from '../constants/actionTypes'
import { handleAction, handleActions } from 'redux-actions';

export default handleActions({
  ADD_TODO: (state, action) => ([...state, {id: action.id, text: action.text, complete: false}]),
  
  COMPLETE_TODO: (state, action) => {
    return state.map(todo => {
      if(todo.id === action.id){
        return Object.assign({}, todo, {complete: true});
      }else{
        return todo;
      }
    });
  }
},[])
