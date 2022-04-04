import { Col, Row } from 'antd'
import { connect } from 'react-redux'
import { changeType } from '../../redux/actions/tabType'
import store from '../../redux/store'
const style = require('./index.module.less').default

const tabType = [
    {
        id: '001',
        name: '热门',
        type: 'hot'
    },
    {
        id: '002',
        name: '最新',
        type: 'new'
    },
    {
        id: '003',
        name: '历史',
        type:'history'
    }
]

interface Iprops {
    changeType: Function
    typeOption:string
}

function TabType(props:Iprops) {
    const { changeType } = props
    return (
        <div className={style.tabType}>
            <Row justify='space-around'>
                {
                    tabType.map((tabTypeObj) => {
                        return (
                            <Col key={tabTypeObj.id} span={24 / tabType.length}>
                                <a 
                                    href="#" 
                                    className={style.tabTypeLink}
                                    onClick={
                                        ()=>{changeType({
                                            typeOption: tabTypeObj.type
                                        })}
                                    }
                                >
                                    {tabTypeObj.name}
                                </a>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

type RootState = ReturnType<typeof store.getState>


export default connect(
    (state:RootState) => ({
        typeOption: state.tabType.typeOption
    }),
    {
        changeType:changeType
    }
)(TabType)