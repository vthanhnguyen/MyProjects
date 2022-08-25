
import {server} from '../config'
import ProjectsList from '../component/ProjectsList'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'


//Head is used for custom titles, metatags, keywords,descriptions
export default function Home({projects}) {
  //console.log(projects)
  return (
    <div>
      <h1>Welcome to NextJS</h1> 
      <ProjectsList projects = {projects}/>
    </div>
  )
}

export const  getStaticProps = async () =>{
  const res = await fetch(`${server}/api/projects`)
  const projects = await res.json()

  return{
    props: {
      projects
    }
  }
}


//getstaticprops, getserversideprops, getstaticpaths, 
// export const  getStaticProps = async () =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return{
//     props: {
//       articles
//     }
//   }
// }