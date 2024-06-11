import { Box, Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from "react";

interface Props {
    title: string;
    setTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AddTodo = ({ title, setTitle, handleFormSubmit }: Props) => {
    return (
        <>
            <form
                onSubmit={handleFormSubmit}
            >
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
                        type={'submit'}
                        colorScheme="blue"
                    >
                        Add
                    </Button>
                </Box>
            </form>
        </>
    )
}

export default AddTodo