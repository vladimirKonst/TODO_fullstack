import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TodoItem } from "@/components/TodoItem";
import { Calendar } from "../components/calendar";
import { type ITodo } from "../pages/todos";
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

type TabValues = 'all' | 'today'

export const TodoWrapper = ({data}: {data: ITodo[]}) => {
    const todos = useSelector((state) => (state as any).todos);
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const [selectedTab, setSelectedTab] = useState<TabValues>('all')
    const handleDateChange = (evt: any) => {
        const { $y, $D, $M } = evt;
        setSelectedDate(dayjs(`${$y}-${$M + 1}-${$D}`))
        setSelectedTab('today')
    };

    const filteredByDate = useMemo(() => data.filter((t) => dayjs(t.due_date).isSame(selectedDate, "day")), [data, selectedDate]);

    return <div>
        todos11111: "{JSON.stringify(todos)}"
        <Tabs 
            value={selectedTab}
            onChange={(e: any, v: TabValues) => setSelectedTab(v)}
            aria-label="basic tabs example"
        >
          <Tab label="All" value="all"/>
          <Tab label="Todays tasks" value="today" />
        </Tabs>
        <List
            className='flex w-full p-10 m-auto'
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <div className='w-[70%] h-full'>
                {(!data.length || !filteredByDate.length) && <span>NO TASKS FOUND</span>}
                {(selectedTab === 'all' ? data : filteredByDate).map((item: any, idx: number, arr: typeof data) => {
                    return <>
                        <TodoItem {...item}/>
                        {idx !== arr.length - 1 &&  <Divider/>}
                    </>
                })}
            </div>
            <Calendar onDateChange={handleDateChange}/>
        </List>
    </div>
}
