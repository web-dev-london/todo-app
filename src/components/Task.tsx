import { Button, Checkbox, HStack, Input } from "@chakra-ui/react"
import { useState } from "react"
import { Todo } from "../service/types"

interface Props {
    todos: Todo
    onDelete: (todoId: number) => void
    onChange: (arg: Todo) => void
}

const Task = ({ todos, onDelete, onChange }: Props) => {
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
    } else {
        todoContent = (
            <>
                {todos.title}
                <Button
                    onClick={() => setIsEditing(true)}
                    colorScheme="cyan"
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