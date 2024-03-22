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
import clsx from 'clsx';

export const TodoItem = ({id, title, description} : { id: number, title: string, description: string}) => {
    const [completed, setCompleted] = useState(false);
    const [open, setOpen] = useState(false);

    const checkboxHandler = (e: MouseEvent) => {
        e.stopPropagation();
        setCompleted(!completed)
    }

    const deleteTaskHandler = (e: MouseEvent) => {
        e.stopPropagation();
        alert(`Delete task id: ${id}`)
    }

    return <div key={id}>
        <ListItemButton onClick={() => setOpen(!open)}>
        <Checkbox checked={completed} onClick={checkboxHandler} />
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