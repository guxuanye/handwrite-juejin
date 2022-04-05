import { FileImageOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import { getCommentsByArticleId } from '../../../../fake-api'
import CommentFirst from './components/CommentFirst'
const style = require('./index.module.less').default

interface Iprops {
    articleId: string | undefined
}

export default function Comment(props: Iprops) {
    const [list, setList] = useState<any>([])

    console.log(list,'list');
    
    
    useEffect(() => {
        const fetchData = async () => {
            let p = getCommentsByArticleId(props.articleId)
            const result = await p
            setList(result.data.comments)
            
        }
        fetchData()
    },[])
    
    return (
        <div className={style.comment}>
            <div className={style.write}>
                <Row className={style.write_title}>
                    评论
                </Row>
                <Row>
                    <TextArea 
                        placeholder="输入评论" 
                        autoSize = {{ minRows: 3}}
                        
                    />
                </Row>
                <Row 
                    justify='space-between' 
                    className={style.write_operation}
                    align='middle'
                >
                    <Col span={6}>
                        <FileImageOutlined />&nbsp;上传图片
                    </Col>
                    <Col span={6}>
                        <Button type="primary">发表评论</Button>
                    </Col>
                </Row>
            </div>
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
