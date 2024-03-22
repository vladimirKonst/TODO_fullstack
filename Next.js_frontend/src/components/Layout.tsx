import { ReactNode } from "react"
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from "next/router"

export const Layout = ({ children }: {children: ReactNode}) => {
  const { asPath } = useRouter()
  const isTodoPage = asPath === "/todos";

  return (
    <>
      <header className="flex items-center w-full h-[60px] bg-sky-300">
        <Link href={!isTodoPage ? "/todos" : "/newtodo"}>
          <Button className='bg-blue-500 m-2' variant="contained">{!isTodoPage ? "Show todos" : "Add new todo"}</Button>
        </Link>
      </header>
        <main className="h-[calc(100vh-120px)]">{children}</main>
      <footer className="flex items-center w-full h-[60px] bg-sky-300"></footer>
    </>
  )
}