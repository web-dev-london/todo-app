import { Container } from '@chakra-ui/react'
import AddTodo from './AddTodo'
import { ChangeEvent, useState } from 'react'
import { initialTodos } from '../service/data'
import { Todo as Task, } from '../service/types'
import TaskList from './TaskList'

let nextId = 3;
const Todo = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState<Task[]>(initialTodos);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleAddTodo = (title: string) => {
        setTodos([
            ...todos, { id: nextId++, title: title, done: false }
        ])
    }

    const handleReset = () => {
        setTitle('')
    }

    const handleDeleteTodo = (todoId: number) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const handleChangeTodo = (nextTodos: Task) => {
        setTodos(todos.map(todo => {
            if (todo.id === nextTodos.id) {
                return nextTodos
            } else {
                return todo
            }
        }))
    }

    return (
        <Container
            maxW={'5xl'}
            p={2}
        >
            <AddTodo
                title={title}
                setTitle={handleInput}
                onAddTodos={handleAddTodo}
                reset={handleReset}
            />
            <TaskList
                todos={todos}
                onDeleteTodos={handleDeleteTodo}
                onChangeTodos={handleChangeTodo}
            />
        </Container>
    )
}

export default Todo