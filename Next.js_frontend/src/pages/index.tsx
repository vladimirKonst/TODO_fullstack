import Button from '@mui/material/Button';
import Link from 'next/link';

const HomePage = () => {
    return <div className='bg-grey-100 p-2 h-full'>
        <Link href="todos">
            <Button className='bg-blue-500' variant="contained">Go to todos</Button>
        </Link>
    </div>
}

export default HomePage;