import { Col, Divider, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
const style = require('./index.module.less').default

export default function Article(props: any) {
    const navigate = useNavigate()

    const { article_id } = props
    const { title, brief_content, cover_image } = props.article_info
    const { user_name } = props.author_user_info
    
    return (
        <div
            className={style.article}
            onClick={() => {
                navigate('/post/' + article_id)
            }}
        >
            <Row className={style.info} align='middle'>
                <Col span={6} offset={1}>
                    {user_name}
                </Col>
                <Divider type="vertical" />
                <Col span={3} offset={1}>
                    1天前
                </Col>
            </Row>
            {
                cover_image ? <Row className={style.preview}>
                    <Col className={style.text} span={15} offset={1}>
                        <Row className={style.title}>
                            { title.length < 13 ? title:
                                title.slice(0,13) + '...'}
                        </Row>
                        <Row className={style.word}>
                            {brief_content.slice(0, 35) + '...'}
                        </Row>
                    </Col>
                    <Col className={style.photo} span={7}>
                        <div>
                            <img src={cover_image} alt="pre-photo" />
                        </div>
                    </Col>
                </Row>
                    :
                    <Row className={style.preview}>
                        <Col className={style.text} span={22} offset={1}>
                            <Row className={style.title}>
                                { title.length < 20 ? title:
                                title.slice(0,20) + '...'}
                            </Row>
                            <Row className={style.word}>
                                {brief_content.slice(0, 56) + '...'}
                            </Row>
                        </Col>
                        <Col className={style.photo} span={0}>
                            <div>
                                <img src={cover_image} alt="pre-photo" />
                            </div>
                        </Col>
                    </Row>
            }

        </div>
    )
}
