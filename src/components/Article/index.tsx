import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Col, Divider, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const style = require('./index.module.less').default

const getDaysDiffBetweenDates = (dateInitial: any, dateFinal: any) => {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24)
}

const deal = (day: number) => {
    if (day < 365) return day.toFixed() + '天前'
    else return (day / 30 / 12).toFixed() + '年前'
}

const addHistory = (listObj: any) => {
    const historyString: string | null = localStorage.getItem('list')
    let historyList: Array<any> = []
    if (historyString) historyList = JSON.parse(historyString)
    historyList = [listObj, ...historyList]
    localStorage.setItem('list', JSON.stringify(historyList))
}

export default function Article(props: any) {
    const navigate = useNavigate()
    const [photoSize, setPhotoSize] = useState(7)

    const { article_id } = props
    const { view_count,comment_count, digg_count, title, brief_content, cover_image, ctime } = props.article_info
    const { user_name } = props.author_user_info

    let diffTime: any = getDaysDiffBetweenDates(
        new Date(ctime * 1000),
        new Date()
    )
    diffTime = deal(diffTime)

    return (
        <div
            className={style.article}
            onClick={() => {
                addHistory(props)
                navigate('/post/' + article_id)
            }}
        >
            <Row className={style.info} align='middle'>
                <Col offset={1}>
                    {user_name}
                </Col>
                <Divider type="vertical" />
                <Col span={4} offset={0}>
                    {diffTime}
                </Col>
            </Row>
            {
                cover_image && photoSize ? <Row className={style.preview}>
                    <Col className={style.text} span={15} offset={1}>
                        <Row className={style.title}>
                            {title.length < 13 ? title :
                                title.slice(0, 13) + '...'}
                        </Row>
                        <Row className={style.word}>
                            {brief_content.slice(0, 35) + '...'}
                        </Row>
                    </Col>
                    <Col className={style.photo} span={photoSize}>
                        <div>
                            <img
                                src={cover_image}
                                alt="pre-photo"
                                onError={() => {
                                    //处理图片加载失败
                                    setPhotoSize(0)
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                    :
                    <Row className={style.preview}>
                        <Col className={style.text} span={22} offset={1}>
                            <Row className={style.title}>
                                {title.length < 20 ? title :
                                    title.slice(0, 20) + '...'}
                            </Row>
                            <Row className={style.word}>
                                {brief_content.slice(0, 53) + '...'}
                            </Row>
                        </Col>
                    </Row>
            }
            <Row className={style.icon} align='middle'>
                <EyeOutlined />
                <span> &nbsp;{view_count}&nbsp;&nbsp;&nbsp; </span>
                <LikeOutlined/>
                <span> &nbsp;{digg_count}&nbsp;&nbsp;&nbsp; </span>
                <MessageOutlined />
                <span> &nbsp;{comment_count} </span>
            </Row>
        </div>
    )
}
