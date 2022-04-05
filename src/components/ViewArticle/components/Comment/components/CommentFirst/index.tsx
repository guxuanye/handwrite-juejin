import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useState } from 'react'
import CommentSecond from '../CommentSecond';
const style = require('./index.module.less').default


export default function CommentFirst(props: any) {
    const { digg_count,comment_content, ctime, } = props.comment_info
    let [isGood, setIsGood] = useState(digg_count)
    const { avatar_large, user_name,  } = props.user_info

    const c = new Date(ctime * 1000)
    const articleData = c.toLocaleString()
    return (
        <div className={style.commentFirst}>
            <Row>
                <Col className={style.tou} span={5}>
                    <img src={avatar_large} alt="" />
                </Col>
                <Col className={style.pinglun} span={19}>
                    <Row className={style.userinfo} justify='space-between' >
                        <Col className={style.username}>{user_name}</Col>
                        <Col className={style.time}>{articleData.slice(0,10).replace(/\//g,' ')}</Col>
                    </Row>
                    <Row className={style.text}>
                        {comment_content}
                    </Row>
                    <Row className={style.icon} align='middle'>
                        <LikeOutlined style={{
                            color: isGood % 2 ? 'skyblue' : ''
                        }}
                            onClick={()=>{setIsGood(isGood+1)}}
                        />
                        <span> &nbsp;{digg_count+(isGood%2)}&nbsp;&nbsp;&nbsp; </span>
                        <MessageOutlined />
                        <span> &nbsp;回复 </span>
                    </Row>

                    {
                        props.reply_infos.length > 0 ?
                        props.reply_infos.map((listObj: any, index:any) => {
                            return <CommentSecond 
                                        {...listObj}
                                        key={index}
                                    />
                        })
                        : <div></div>
                    }
                </Col>
            </Row>
        </div>
    )
}
