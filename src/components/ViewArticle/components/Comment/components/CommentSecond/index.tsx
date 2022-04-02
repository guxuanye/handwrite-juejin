import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useState } from 'react'
const style = require('./index.module.less').default

export default function CommentSecond(props: any) {
    let [isGood, setIsGood] = useState(0)
    const { reply_content, ctime } = props.reply_info
    const { avatar_large, user_name } = props.user_info

    const c = new Date(ctime * 1000)
    const articleDate = c.toLocaleString().replace(/:\d{1,2}$/, ' ')

    return (
        <div className={style.reply}>
            <Row>
                <Col className={style.left} span={4}>
                    <img src={avatar_large} alt="avatar_large" />
                </Col>
                <Col className={style.right} span={20}>
                    <Row className={style.info} justify='space-between'>
                        <Col className={style.username}>{user_name}</Col>
                        <Col className={style.time}>{articleDate}</Col>
                    </Row>
                    <Row className={style.content}>{reply_content}</Row>
                    <Row className={style.icon} align='middle'>
                        <LikeOutlined style={{
                            color: isGood % 2 ? 'skyblue' : ''
                        }}
                            onClick={() => { setIsGood(isGood + 1) }}
                        />
                        <span> 点赞&nbsp;&nbsp;&nbsp; </span>
                        <MessageOutlined />
                        <span> 回复 </span>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
