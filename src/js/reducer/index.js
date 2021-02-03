import {ADD_TODO , EDIT_TASK , REMOVE_TODO , TOGGLE_COMPLETE} from "../const";

const initstate = {
    todos = {text : "learn react-redux", iscomplete: false, id : 0}
};
export default function (state=initstate, action) {
    switch(action.type) {
      case ADD_TODO:
          return { ...state, todos :[action.payload, ...state.todos]};
      case REMOVE_TODO:
          return { ...state,todos :state.todos.filter((todo)=>todo.id!== action.payload),};
      case TOGGLE_COMPLETE:
          return { ...state, todos : state.todos.map(todo=>todo.id===action.payload?{...todo , isComplete : !isComplete}: todo),};
      case EDIT_TASK :
          return {...state, todos : state.todos.map(todo =>todo.id=== action.payload.id? action.payload : todo), };

    default:
        return state ;
    }
}