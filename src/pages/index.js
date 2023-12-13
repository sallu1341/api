import Layout from "../../component/Layout"
import Link from "next/link"



export default function Home() {
  return (
    <Layout title="Home ">
      
    
      <h1 className="bg-dark text-light p-5">hello Home page</h1>
      <Link href="/about">hello </Link>
      
      
      </Layout>
  )
}
