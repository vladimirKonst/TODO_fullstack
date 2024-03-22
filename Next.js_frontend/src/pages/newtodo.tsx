import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const newTodo = () => {
  return (
    <Box
        className='p-5 flex flex-col items-center'
        component="form"
        noValidate
        autoComplete="off"
    >
        <TextField
            className='m-2 w-full'
            required
            id="outlined-required"
            label="Task's Title"
        />
        <TextField
            className='m-2 w-full'
            id="outlined-multiline-static"
            label="Task's description"
            multiline
            rows={10}
        />
        <div className='w-full'>
            <Button className='bg-blue-500 m-2 w-[20%]' variant="contained">save</Button>
            <Button
                className='bg-red-500 hover:bg-red-700 m-2 w-[20%]'
                variant="contained"
            >
                clear
            </Button>
        </div>
    </Box>
  );
}

export default newTodo;