import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../fake-api'
import Author from './components/Author'
import Comment from './components/Comment'
const style = require('./index.module.less').default

export default function ViewArticle() {
    const [isLoading, setIsLoading] = useState(false)
    const [article, setArticle] = useState({
        article_id: 0,
        article_content: '',
        article_info: {
            title: '',
            cover_image:'',
            ctime: 0
        },
        author_user_info: {
            avatar_large: '',
            user_name: ''
        }
    })
    const articleId = useParams()['*']

    useEffect(() => {
        const fetchData = async () => {
            let p = getArticleById(articleId)
            let result = await p
            if (result.data !== undefined) {
                setArticle(result.data.article)
            }
            setIsLoading(true)
        }
        fetchData()
    }, [])

    console.log('ViewArticle 被调用了');
    
    return (
        <div className={style.article}>
            <div className={style.title}>{article.article_info.title}</div>
            <Author {...article.author_user_info} {...article.article_info}></Author>
            {
                !isLoading ?
                    <div>正在加载...</div> :
                    <div className={style.content} dangerouslySetInnerHTML={{__html: article.article_content}} />
            }
            <Row className={style.divide2}></Row>
            <Comment articleId={articleId}/>
        </div>
    )
}
