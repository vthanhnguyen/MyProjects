
import ProjectItem from './ProjectItem'
import ArticleStyle from '../styles/Article.module.css'

const ProjectsList = ({projects}) => {
    return(
        <div className = {ArticleStyle.grid}>
            {projects.map((projects) =>(
                <ProjectItem project ={projects}/>
            ))}
        </div>
    )
}

export default ProjectsList