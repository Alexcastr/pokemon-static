import Head from "next/head"
import { Navbar } from '../ui';

 
interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export const Layout = ({children, title}: LayoutProps) => {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Alex Castro"/>
      <meta name="description" content="Pokemon name description"/>
      <meta name="keywords" content="name, pokedex, pokemon"/>
    
    </Head>
    <Navbar/>
    <main style={{
      padding: "0 20px",
    }}>{children}</main>
    </>
    
  )
}

