import { Col, Divider, Row } from 'antd'
const style = require('./index.module.less').default

export default function Article(props:any) {
    // console.log(props.article_info.title);
    console.log(props);
    
    
    const { title, brief_content, cover_image} = props.article_info
    const { user_name } = props.author_user_info
    console.log(cover_image);
    
    
    return (
        <div className={style.article}>
            <Row className={style.info} align='middle'>
                <Col span={6} offset={1}>
                    {user_name}
                </Col>
                <Divider type="vertical" />
                <Col span={3} offset={1}>
                    1天前
                </Col>
            </Row>
            <Row className={style.preview}>
                <Col className={style.text} span={15} offset={1}>
                    <Row className={style.title}>
                        { title.slice(0,13) + '...' }
                    </Row>
                    <Row className={style.word}>
                        {brief_content.slice(0,38)+'...'}
                    </Row>
                </Col>
                <Col className={style.photo} span={7}>
                    <div>
                        {/* <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab383f4bb68e49208119a6b82593aad7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="pre-photo" /> */}
                        <img src={cover_image} alt="pre-photo" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
