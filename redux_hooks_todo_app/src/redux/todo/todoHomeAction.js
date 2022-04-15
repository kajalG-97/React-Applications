import axios from "axios";

export const TODO_LIST = 'TODO_LIST';

export const TODO_ERROR = 'TODO_ERROR';

export const TODO_LODING = 'TODO_LODING';

export const todoLoding = () => ({ type: TODO_LODING });

export const todoError = () => ({ type: TODO_ERROR });

export const todoList = (payload) => ({ type: TODO_LIST, payload });
