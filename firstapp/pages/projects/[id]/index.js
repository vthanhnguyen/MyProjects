
import Link from 'next/link'
import {useRouter} from 'next/router'

const projects = ({projects}) => {
    //const router = useRouter()
    //const {id} = router.query

    return(
        <>
            <h1>{projects.title}</h1>
            <h2>{projects.body}</h2>
            <br />
            <Link href='/'>Go back</Link>
        </>
        
    )
}

// Fetch data at the time at the request rather than at build time
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const projects = await res.json()

    return{
        props:{
            projects
        }
    }
}

// export const getStaticProps = async () => {

// }

// //must use combination of getStaticProps and getStaticPaths
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     const ids = article.map(article=> article.id)
//     const paths = ids.map(id => ({params:{id: id.toString()}}))
//     return{
//         paths,
//         fallback: false,
//     }
// }
export default projects