import { Col, Row } from 'antd'
const style = require('./index.module.less').default

const tabType = [
    {
        id: '001',
        name: '热门'
    },
    {
        id: '002',
        name: '最新'
    },
    {
        id: '003',
        name: '历史'
    }
]

export default function TabType() {
    return (
        <div className={style.tabType}>
            <Row justify='space-around'>
                {
                    tabType.map((tabTypeObj) => {
                        return (
                            <Col key={tabTypeObj.id} span={24 / tabType.length}>
                                <a href="#" className={style.tabTypeLink}>{tabTypeObj.name}</a>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
