import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { TodoItem } from "@/components/TodoItem";

export const TodoWrapper = ({data}: {data: any}) => {

    return <List
        className='w-full max-w-[70%] m-auto'
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
        {data.map((item: any, idx: number, arr: typeof data) => {
            return <>
                <TodoItem {...item}/>
                {idx !== arr.length - 1 &&  <Divider/>}
            </>
        })}
    </List>
}
