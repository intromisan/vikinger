import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

interface TodoState {
  todoList: TodoItem[];
  isModalOpen: boolean;
}

const initialState: TodoState = {
  todoList: [],
  isModalOpen: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList.filter((todoItem) => todoItem.id !== action.payload);
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { addTodo, toggleModal } = todoSlice.actions;

export default todoSlice.reducer;
