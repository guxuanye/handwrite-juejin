import { BellOutlined, MessageOutlined } from '@ant-design/icons';
import { Col, Row, Input, Button, Divider } from 'antd'
import { Link, NavLink } from 'react-router-dom';
import NavSM from './components/NavSM'
const { Search } = Input;
const style = require('./index.module.less').default

export default function Header() {
    return (
        <div className={style.header}>
            <Row justify='space-around' align='middle' style={{ height: '50px' }}>
                <Col xs={0} sm={3}>
                    <img className={style.icon_large} src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="juejin-icon" />
                </Col>
                <Col xs={{ span: 1, offset: 1 }} sm={0}>
                    <a href='/home'>
                        <img
                            className={style.icon_small}
                            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
                            alt="juejin-icon"
                        />
                    </a>

                </Col>
                <Col xs={0} sm={0} md={8} >
                    <ul className={style['nav_md']} >
                        <li>首页</li>
                        <li>沸点</li>
                        <li>课程</li>
                        <li>直播</li>
                        <li>资讯</li>
                        <li>活动</li>
                        <li>社区</li>
                        <li>商城</li>
                        <li>插件</li>
                    </ul>
                </Col>
                <Col xs={{ span: 3 }} md={0} >
                    <NavSM name={style['nav_sm']} />
                </Col>
                <Col xs={12} md={3}>
                    <Search
                        placeholder="探索稀土掘金"
                        enterButton
                        className={style.search}
                    />
                </Col>
                <Col xs={0} sm={2} >
                    <Button size='large'>创作者中心</Button>
                </Col>
                <Col span={1}>
                    <BellOutlined
                        style={{ fontSize: '100%' }}
                        className={style.msg}
                    />
                </Col>
                <Col span={3}>
                    <Button >我</Button>
                </Col>
            </Row>
            <Divider
                style={{
                    margin: 0
                }}
            />
        </div>
    )
}
