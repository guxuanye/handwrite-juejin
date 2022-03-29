import { Row } from 'antd'
import Header from '../../components/Header'
import List from '../../components/List'
import TabField from '../../components/TabField'
import TabTech from '../../components/TabTech'
import TabType from '../../components/TabType'
const style = require('./index.module.less').default

export default function PageHome() {
  return (
    <div>
        <Header></Header>
        <TabField></TabField>
        <Row className={style.divide}></Row>
        <TabTech/>
        {/* <Outlet></Outlet> */}
        <List></List>

        <TabType></TabType>
    </div>
  )
}
