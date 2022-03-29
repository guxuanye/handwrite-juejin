import { Col, Divider, Row } from 'antd'
const style = require('./index.module.less').default

export default function Article() {
  return (
    <div className={style.article}>
        <Row className={style.info} align='middle'>
            <Col span={3} offset={1}>
                稀土君
            </Col>
            <Divider type="vertical" />
            <Col span={3} offset={1}>
                1天前
            </Col>
        </Row>
        <Row className={style.preview}>
            <Col className={style.text} span={15} offset={1}>
                <Row className={style.title}>
                    打破次元壁
                </Row>
                <Row className={style.word}>
                    以稀土掘金潮汐光年
                </Row>
            </Col>
            <Col className={style.photo} span={7}>
                <div>
                    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab383f4bb68e49208119a6b82593aad7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="pre-photo" />
                </div>
            </Col>
        </Row>
    </div>
  )
}
