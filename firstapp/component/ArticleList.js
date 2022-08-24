
import ArticleItem from './ArticleItem'
import ArticleStyle from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return(
        <div className = {ArticleStyle.grid}>
            {articles.map((article) =>(
                <ArticleItem article ={article}/>
            ))}
        </div>
    )
}

export default ArticleList