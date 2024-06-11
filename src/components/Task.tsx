import { Button, Checkbox, HStack, Input } from "@chakra-ui/react"
import { useState } from "react"
import { Todo } from "../service/types"

interface Props {
    todos: Todo
    onDelete: (todoId: number) => void
    onChange: (nextTodos: Todo) => void
    updateStatus: (index: Todo) => void
}

const Task = ({ todos, onDelete, onChange, updateStatus }: Props) => {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <Input
                    maxW={'sm'}
                    value={todos.title}
                    onChange={e => {
                        onChange({
                            ...todos,
                            title: e.target.value
                        })
                    }}
                />
                <Button
                    onClick={() => setIsEditing(false)}
                    colorScheme="teal"
                >
                    Save
                </Button>
            </>
        )

        if (todos.done) {
            setIsEditing(false)
        }

    } else {
        todoContent = (
            <>
                {todos.title}
                <Button
                    onClick={() => setIsEditing(true)}
                    colorScheme="cyan"
                    isDisabled={todos.done}
                >
                    Edit
                </Button>
            </>
        )
    }


    return (
        <>
            <HStack
                mt={3}
            >
                <Checkbox
                    defaultChecked={todos.done}
                    onChange={(e) => {
                        console.log('Checkbox ', todos.done);
                        updateStatus({
                            ...todos, done: e.target.defaultChecked
                        })

                    }}
                />
                {todoContent}
                <Button
                    onClick={() => onDelete(todos.id)}
                    colorScheme="red"
                >
                    Delete
                </Button>
            </HStack >
        </>
    )
}

export default Task