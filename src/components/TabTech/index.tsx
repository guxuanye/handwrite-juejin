import { Col, Row } from 'antd'
import { pinyin } from 'pinyin-pro'
import { connect } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { changeTech } from '../../redux/actions/tabTech'
import store from '../../redux/store'
const style = require('./index.module.less').default

function toPinyin(s: string) {
    return pinyin(s, {
        toneType: 'none'
    }).replace(/\s/g, '')
}

interface ListObj {
    category_id: number,
    category_name: string
    children: Array<ListObj>
}

interface Iprops {
    fieldOption: number
    field: Array<ListObj>
    changeTech: Function
}

function TabTech(props: Iprops) {

    const fieldOption = useParams()['*']?.split('/')[0]
    let field = props.field
    for (let i = 0; i < field.length; i++) {
        if (fieldOption === toPinyin(field[i].category_name)) {
            field = field[i].children
            break
        }
    }

    if (field === undefined) {
        field = [{
            category_id: 0,
            category_name: '',
            children: []
        }]
    }

    return (
        <div className={style.tech}>
            <Row justify='start' align="middle" className={style.Row}>
                {
                    field.map((fieldObj,index) => {
                        const sp = ((fieldObj.category_name.length*2/3).toFixed())
                        return (
                            <Col key={fieldObj.category_id} span={sp}>
                                <NavLink 
                                    to={fieldOption + '/' + toPinyin(fieldObj.category_name)} 
                                    className={style.techLink}
                                    onClick={() => {props.changeTech({techOption: index+1})}}
                                >
                                    {fieldObj.category_name}
                                </NavLink>
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
    (state: RootState) => ({
        fieldOption: state.tabField.fieldOption,
        field: state.tabField.field
    }),
    {
        changeTech: changeTech
    }
)(TabTech)