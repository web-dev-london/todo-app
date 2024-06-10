import { List, ListItem } from '@chakra-ui/react'
import { Todo } from '../service/types'
import Task from './Task'

interface Props {
    todos: Todo[]
    onDeleteTodos: (arg: number) => void
    onChangeTodos: (nextTodos: Todo) => void;
}

const TaskList = ({ todos, onDeleteTodos, onChangeTodos }: Props) => {

    const listOfTasks = todos.map((todo) => {
        return (
            <ListItem
                key={todo.id}
            >
                <Task
                    todos={todo}
                    onChange={onChangeTodos}
                    onDelete={onDeleteTodos}
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