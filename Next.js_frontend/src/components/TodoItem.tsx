import { useState, type MouseEvent } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import Delete from "@mui/icons-material/Delete";
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { type ITodo } from "../pages/todos"

interface ITodoItemsProps extends ITodo {}

export const TodoItem = ({id, title, description, completed, due_date} : ITodoItemsProps) => {
    
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const checkboxHandler = async (e: MouseEvent) => {
        e.stopPropagation();
        updateTodo(Number((e.target as HTMLInputElement).checked))
        router.push("/todos")
    }

    const deleteTaskHandler = async (e: MouseEvent) => {
        e.stopPropagation();
        try {
            const response = await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Error deleting todo');
            }
    
            const data = await response.json();
            router.push("/todos");
            console.log('Delete successful:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const updateTodo = async (completed: number) => {
        try {
            const response = await fetch(`http://localhost:3001/todos/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id, title, description, completed}),
            });
        
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log('Update successful:', data);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    }

    return <div key={id}>
        <ListItemButton onClick={() => setOpen(!open)}>
        <Checkbox checked={Boolean(completed)} onClick={checkboxHandler} />
        <ListItemText className={clsx({"line-through": completed})} primary={title}/>
        {open ? <ExpandLess /> : <ExpandMore />} 
        <ListItemButton className='max-w-10 p-2' onClick={deleteTaskHandler}>
            <ListItemIcon>
                <Delete />
            </ListItemIcon>
        </ListItemButton>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Typography component="span">
                <Box className='ml-14'>{description}</Box>
            </Typography>
            </List>
        </Collapse>
    </div>
}