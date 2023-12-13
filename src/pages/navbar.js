import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div> 
        <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/user">Service</Link>
           


        </ul>
        
    
       </div>
  )
}

export default Navbar