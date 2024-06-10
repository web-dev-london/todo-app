import { Box, Button, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
    title: string;
    setTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddTodos: (agr: string) => void;
    reset: () => void;
}

const AddTodo = ({ title, setTitle, onAddTodos, reset }: Props) => {
    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'flex-start'}
            >
                <Input
                    placeholder="Add todo..."
                    value={title}
                    onChange={setTitle}
                    maxW={'md'}
                />
                <Button
                    onClick={() => {
                        onAddTodos(title)
                        reset()
                    }}
                    colorScheme="blue"
                >
                    Add
                </Button>
            </Box>
        </>
    )
}

export default AddTodo