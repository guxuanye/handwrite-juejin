import { Col, Row } from 'antd'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../fake-api'
import { pinyin } from 'pinyin-pro'

import { connect } from 'react-redux'
import { changeField, changeFieldOption } from '../../redux/actions/tabField'
import { changeTech } from '../../redux/actions/tabTech'
import store from '../../redux/store'
import { useEffect } from 'react'

const style = require('./index.module.less').default

interface ListObj {
    category_id: number,
    category_name: string
}


async function getCate(changeField: Function) {
    let k = await getCategories()
    changeField({
        field: k.data.categories
    })
}

interface Iprops{
    field: any,
    fieldOption: number,
    changeField: Function
    changeFieldOption: Function
    changeTech: Function
}


function TabField(props: Iprops) {
    let { field, changeField, changeFieldOption, changeTech } = props
    useEffect(()=>{
        getCate(changeField)
    },[changeField])

    return (
        <div className={style.field}>
            <Row justify='space-around'>
                {
                    field.map((fieldObj: ListObj, index:number) => {
                        return (
                            <Col key={fieldObj.category_id} span={24 / field.length}>
                                <NavLink 
                                    className={style.category_name}
                                    to={pinyin(fieldObj.category_name, {
                                        toneType: 'none'
                                    }).replace(/\s/g,'')}
                                    onClick={() => {
                                        changeFieldOption({fieldOption: index})
                                        changeTech({techOption: 0})
                                    }}
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
        changeField: changeField,
        changeFieldOption: changeFieldOption,
        changeTech: changeTech
    }
)(TabField)