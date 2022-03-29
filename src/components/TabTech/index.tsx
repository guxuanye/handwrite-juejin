import { Col, Divider, Row } from 'antd'
import { pinyin } from 'pinyin-pro'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
const style = require('./index.module.less').default

function getCate(setField :Function){
    PubSub.subscribe('categoryData', (msg, stateObj) => {
        setField(stateObj.field)
    })
}

function toPinyin(s: string) {
    return pinyin(s, {
        toneType: 'none'
    }).replace(/\s/g,'')
}


interface ListObj {
    category_id: number,
    category_name: string
    children: Array<ListObj>
}

export default function TabTech() {
    const [field, setField] = useState<Array<ListObj>>([])
    getCate(setField)
    
    const fieldOption = useParams()['*']?.split('/')[0]
    const f = fieldOption
    for (let i=0; i<field.length; i++){
        if (fieldOption ===  toPinyin(field[i].category_name)) {
            setField(field[i].children)
        }
    }
    
    return (
        <div className={style.tech}>
            <Row justify='start' align="middle" className={style.Row}>
                {
                    field.map((fieldObj) => {
                        return (
                            <Col key={fieldObj.category_id} span={4}>
                                <NavLink to={f + '/' + toPinyin(fieldObj.category_name)} className={style.techLink}>{fieldObj.category_name}</NavLink>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
