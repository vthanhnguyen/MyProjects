
import {server} from '../config'
import ArticleList from '../component/ArticleList'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'


//Head is used for custom titles, metatags, keywords,descriptions
export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <h1>Welcome to NextJS</h1> 
      <ArticleList articles = {articles}/>
    </div>
  )
}

export const  getStaticProps = async () =>{
  const res = await fetch(`${server}/api/projects`)
  const articles = await res.json()

  return{
    props: {
      articles
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