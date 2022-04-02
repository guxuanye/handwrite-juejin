import React, { useEffect, useState } from 'react'
import { getCommentsByArticleId } from '../../../../fake-api'
import CommentFirst from './components/CommentFirst'
const style = require('./index.module.less')

interface Iprops {
    articleId: string | undefined
}

export default function Comment(props: Iprops) {
    const [list, setList] = useState<any>([])

    
    useEffect(() => {
        const fetchData = async () => {
            console.log('我被调用了')
            let p = getCommentsByArticleId(props.articleId)
            const result = await p
            setList(result.data.comments)
            
        }
        fetchData()
    },[])
    
    return (
        <div className={style.comment}>
            {
                list.length===0 ? <div>Loading...</div> :
                list.map((listObj: any) => {
                    return <CommentFirst 
                                key={listObj.comment_id}
                                {...listObj}
                            />
                })
            }
        </div>
    )
}
