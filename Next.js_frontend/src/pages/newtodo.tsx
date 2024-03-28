import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/router'
import dayjs from 'dayjs';
import { Calendar } from "../components/calendar";
import { useSelector, useDispatch } from 'react-redux';
import { createTodo } from '../store/slices/todos/todoSlice';

const newTodo = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [calendarDate, setCalendarDate] = useState(dayjs())
    const handleDateChange = (evt: any) => {
        const { $y, $D, $M } = evt;
        setCalendarDate(dayjs(`${$y}-${$M + 1}-${$D + 1}`))
    }
    const createNewTodo = async () => {
        dispatch(
            createTodo({
                text: 'dsfadsfasdfsdfadsfasdf'
            })
        );
        const response = await fetch('http://localhost:3001/addnewtodo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                due_date: calendarDate.toISOString(), // TODO: fix it
                completed: 0
            })
        })
        const data =  await response.json()
        console.log(data)
        router.push('/todos')
    }
    const clearForm = () => {
        setTitle("")
        setDescription("")
    }

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
            value={title}
            onInput={(evt: FormEvent<HTMLInputElement>) => setTitle((evt.target as HTMLInputElement).value)}
        />
        <div className='flex w-full justify-between'>
            <TextField
                value={description}
                onInput={(evt: FormEvent<HTMLInputElement>) => setDescription((evt.target as HTMLInputElement).value)}
                className='w-[70%] h-max'
                id="outlined-multiline-static"
                label="Task's description"
                multiline
                rows={10}
            />
            <Calendar onDateChange={handleDateChange} />
        </div>
        <div className='w-full'>
            <Button
                onClick={createNewTodo}
                className='bg-blue-500 m-2 w-[20%]'
                variant="contained"
            >
                save
            </Button>
            <Button
                className='bg-red-500 hover:bg-red-700 m-2 w-[20%]'
                variant="contained"
                onClick={clearForm}
            >
                clear
            </Button>
        </div>
    </Box>
  );
}

export default newTodo;
