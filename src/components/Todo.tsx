import { Container, Heading } from '@chakra-ui/react'
import AddTodo from './AddTodo'
import { ChangeEvent, FormEvent, useState } from 'react'
import { initialTodos } from '../service/data'
import { Todo as Task, } from '../service/types'
import TaskList from './TaskList'


let nextId = 4;

const Todo = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState<Task[]>(initialTodos);

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleAddTodo(title);
        handleReset();
    }

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

    const handleCheckStatus = (index: number) => {
        setTodos(
            todos.map((todo, currentIndex) =>
                index === currentIndex
                    ? { ...todo, done: !todo.done }
                    : todo)
        )

        // setTodos([
        //     ...todos.slice(0, index),
        //     { ...todos[index], done: !todos[index].done },
        //     ...todos.slice(index + 1)
        // ])
    }


    return (
        <>
            <Container
                maxW={'2xl'}
                p={4}
                className={'container'}
            >
                <Heading
                    fontSize={'26px'}
                    mb={5}
                    textAlign={'center'}
                >
                    Todo App
                </Heading>
                <AddTodo
                    title={title}
                    setTitle={handleInput}
                    handleFormSubmit={handleFormSubmit}
                />
                <TaskList
                    todos={todos}
                    onDeleteTodos={handleDeleteTodo}
                    onChangeTodos={handleChangeTodo}
                    checkStatus={handleCheckStatus}
                />
            </Container>
            <pre>{JSON.stringify(todos, null, 2)}</pre>
        </>
    )
}

export default Todo