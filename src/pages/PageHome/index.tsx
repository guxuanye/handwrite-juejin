import { Row } from 'antd'
import Header from '../../components/Header'
import List from '../../components/List'
import TabField from '../../components/TabField'
import TabTech from '../../components/TabTech'
import TabType from '../../components/TabType'
const style = require('./index.module.less').default

export default function PageHome() {
  console.log('HomePage 调用render');
  
  return (
    <div>
        <Header></Header>
        <TabField></TabField>
        <Row className={style.divide}></Row>
        <TabTech/>
        <List></List>

        <TabType></TabType>
    </div>
  )
}
