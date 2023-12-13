import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children,title}) => {
  return (
    <div>
        <Header/>

        {/* //next/head */}
        <Head>
        <title>{title}</title>
        <meta content="My page title" key="title" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous"/>

      
      </Head>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout