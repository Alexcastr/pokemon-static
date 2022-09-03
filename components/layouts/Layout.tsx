import Head from "next/head"
import { Navbar } from '../ui';


 
interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({children, title}: LayoutProps) => {


 
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Alex Castro"/>
      <meta name="description" content="Pokemon name description"/>
      <meta name="keywords" content="name, pokedex, pokemon"/>

      <meta property="og:title" content={`Informacion sobre el pokémon ${title}`} />
      <meta property="og:description" content={`Esta es la página sobre ${title}`} />
      <meta property="og:image" content={`${origin}/image/banner.png`} />
    
    </Head>
    <Navbar/>
    <main style={{
      padding: "0 20px",
    }}>{children}</main>
    </>
    
  )
}

