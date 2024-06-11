import { List, ListItem } from '@chakra-ui/react'
import { Todo } from '../service/types'
import Task from './Task'

interface Props {
    todos: Todo[];
    onDeleteTodos: (todoId: number) => void;
    onChangeTodos: (nextTodos: Todo) => void;
    checkStatus: (todos: number) => void;
}

const TaskList = ({ todos, onDeleteTodos, onChangeTodos, checkStatus }: Props) => {

    const listOfTasks = todos.map((todos, index) => {
        return (
            <ListItem
                key={todos.id}
            >
                <Task
                    todos={todos}
                    onChange={onChangeTodos}
                    onDelete={onDeleteTodos}
                    updateStatus={() => checkStatus(index)}
                />
            </ListItem>
        )
    })

    return (
        <>
            <List>
                {listOfTasks}
            </List>
        </>
    )
}

export default TaskList