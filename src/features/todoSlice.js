import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const initialState = {
    todos : [{ id:1 , text : "hlo world"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)
            
        },
        // updateTodo: (state,action) =>{
        //     state.todos = state.todos.map((todo) => (
        //         console.log("todo is : "+todo+" action.payload : "+action.payload.id)
        //     ))
        // }
        
    }
})
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer