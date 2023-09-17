import { createSlice } from "@reduxjs/toolkit";

// initialState

    const initialState = {
        todosValue : [],
    };

//reducers

    export const todoSlice = createSlice ({
        name : 'todo',
        initialState,
        reducers:{
            addTodo : (state,action) => {
                const existingTodo = state.todosValue.map((item)=>item.id === action.payload.id);
                if(existingTodo){
                    state.todosValue.push(action.payload);

                }else{
                        state.todosValue = action.payload;
                }
            }
        }
    });

//export

    export const {addTodo} = todoSlice.actions;

    export default todoSlice.reducer;