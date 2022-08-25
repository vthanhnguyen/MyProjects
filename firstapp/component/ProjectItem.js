import Link from "next/link";
import ArticleStyle from '../styles/Article.module.css'

const ProjectItem = ({project}) => {
    return(
        <Link href="/projects/[id]" as={`/projects/${project.id}`}>
            <a className= {ArticleStyle.card}>
                <h3>{project.customer} &rarr;</h3>
                <p>{project.project}</p>
            </a>
        </Link>
    )
}
    
export default ProjectItem