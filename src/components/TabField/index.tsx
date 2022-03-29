import { Col, Row } from 'antd'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../fake-api'
import { pinyin } from 'pinyin-pro'
import PubSub from 'pubsub-js'
const style = require('./index.module.less').default

interface ListObj {
    category_id: number,
    category_name: string
}


async function getCate(setField: Function) {
    let k = await getCategories()
    setField(k.data.categories)
    PubSub.publish('categoryData', {
        field: k.data.categories
    })
}


export default function TabField() {
    const [field, setField] = useState([])
    getCate(setField)
    
    return (
        <div className={style.field}>
            <Row justify='space-around'>
                {
                    field.map((fieldObj: ListObj) => {
                        return (
                            <Col key={fieldObj.category_id} span={24 / field.length}>
                                <NavLink 
                                    className={style.category_name}
                                    to={pinyin(fieldObj.category_name, {
                                        toneType: 'none'
                                    }).replace(/\s/g,'')}
                                >
                                    {fieldObj.category_name}
                                </NavLink>
                                {/* <a href="#" className={style.fieldLink}>{fieldObj.name}</a> */}
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
