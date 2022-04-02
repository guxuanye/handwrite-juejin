import { Button, Col, Row } from 'antd'
import React from 'react'
const style = require('./index.module.less').default

interface Iprops {
    avatar_large: string
    user_name: string
    ctime: number
}

export default function Author(props: Iprops) {
    const { avatar_large, user_name, ctime } = props
    const c = new Date(ctime * 1000)
    const articleData = c.toLocaleString().replace(/:\d{1,2}$/,' ')
    
    return (
        <div className={style.author}>
            <Row align='middle'>
                <Col span={4}>
                    <img src={avatar_large} alt="avatar_large" />
                </Col>
                <Col span={14}>
                    <Row className={style.username}>{user_name}</Row>
                    <Row className={style.timedata}>
                        {articleData}
                    </Row>
                </Col>
                <Col span={6} className={style.btn}>
                    <Button size='large'>关注</Button>
                </Col>
            </Row>
        </div>
    )
}
