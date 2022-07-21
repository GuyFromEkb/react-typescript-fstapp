import React from "react";
import { useState, useEffect } from "react";

import ToDoForm from "../../components/toDoForm/ToDoForm";
import ToDoList from "../../components/toDoList/TodoList";

import { IToDo } from "../../interface";
import "./toDo.scss";

const ToDo: React.FC = () => {

    const [todo, setTodo] = useState<IToDo[]>([]);

    useEffect(() => {
        const savedLocalStorageToDo = JSON.parse(localStorage.getItem('todos') ?? '[]') as IToDo[]
        setTodo(savedLocalStorageToDo)
    }, [])
    useEffect(() => {
        const loadLocalStorageToDo = JSON.stringify(todo)
        localStorage.setItem('todos', loadLocalStorageToDo)
    }, [todo])

    const onAddTodo = (todoItem: string) => {
        const newTodo = {
            title: todoItem,
            id: Date.now(),
            complited: false
        }
        setTodo(prev => [...prev, newTodo])
    }
    const onRemoveTodo = (id: number) => {
        setTodo(prev => (
            prev.filter(item => item.id !== id)
        ))
    }
    const onCheckedToDo = (id: number) => {
        setTodo(prev => (
            prev.map(item => (item.id === id) ? { ...item, complited: !item.complited } : item)
        ))
    }

    return (
        <>
            <ToDoForm onAdd={onAddTodo} />
            <ToDoList onChek={onCheckedToDo} onRemove={onRemoveTodo} toDoList={todo} />
        </>
    );
};

export default ToDo;
