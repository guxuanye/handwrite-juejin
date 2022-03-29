import Article from '../Article/index'
import { useParams } from 'react-router-dom'
const style = require('./index.module.less').default

//list 负责去获取筛选文章，传递文章id

export default function List() {
    const a = useParams()['*']?.split('/')
    console.log(a);
    
    return (
        <div className={style.list}>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
        </div>
    )
}
