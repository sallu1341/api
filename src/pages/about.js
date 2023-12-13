import React from 'react'
import {useRouter} from "next/router"
import Layout from '../../component/Layout'

const About  = () => {
    const router=useRouter()
  return (
    <Layout title="About us Page">
        <h1>This is About Pages</h1>
        <button onClick={()=>{router.push("/")}}>Go Back</button>
        <button onClick={()=>alert("hello salman")}>click me</button>
        
        </Layout>
  )
}

export default About