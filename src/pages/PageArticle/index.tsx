import { Row } from 'antd'
import React from 'react'
import Header from '../../components/Header'
import ViewArticle from '../../components/ViewArticle'
const style = require('./index.module.less').default

export default function PageArticle() {
    return (
        <div>
            <Header></Header>
            <Row className={style.divide}></Row>
            <ViewArticle></ViewArticle>
        </div>
    )
}
