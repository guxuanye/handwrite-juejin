import Article from '../Article/index'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { useEffect, useState } from 'react'
import { getArticles } from '../../fake-api'
const style = require('./index.module.less').default

interface Iprops {
    fieldOption:number,
    techOption:number
}
// interface Ilist {

// }

//list 负责去获取筛选文章，传递文章id

function List(props: Iprops) {
    const [list, setList] = useState<any>([])
    console.log(props,'props');
    let {fieldOption, techOption} = props
    if (fieldOption === -1) {
        fieldOption = 0;
    } else {
        if (techOption === -1) {
            techOption = 0;
        } else {
            fieldOption = fieldOption*10 + techOption
        }
    }
    
    useEffect(()=>{
        var p = getArticles(fieldOption)
        p.then(response => setList(response.data.articles))
    },[fieldOption])
    console.log(list);
    
    
    return (
        <div className={style.list}>
            <div>{props.fieldOption+ ' ' + props.techOption}</div>
            {
                list.map((listObj: any) => {
                    return <Article {...listObj} key={listObj.article_id}></Article>
                })
            }
        </div>
    )
}

type RootState = ReturnType<typeof store.getState>

export default connect(
    (state: RootState) => {
        return {
            fieldOption:state.tabField.fieldOption,
            techOption:state.tabTech.techOption
        }
    },
    {
        
    }
)(List)