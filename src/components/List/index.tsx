import Article from '../Article/index'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { useEffect, useState } from 'react'
import { getArticles } from '../../fake-api'
const style = require('./index.module.less').default

interface Iprops {
    fieldOption: number,
    techOption: number
}
// interface Ilist {

// }

//list 负责去获取筛选文章，传递文章id

function List(props: Iprops) {
    const [list, setList] = useState<any>([])
    let { fieldOption, techOption } = props
    fieldOption = techOption === 0 ? fieldOption : fieldOption * 10 + techOption

    const getMore = (listLength: number, fieldOption: number) => {
        console.log(listLength, 'getMore', fieldOption);

        let p = getArticles(fieldOption, 'hot', listLength, 10)
        p.then(res => {
            setList([...list, ...res.data.articles])
        })
    }

    window.addEventListener('scroll', (event) => {
        const f = (fieldOption:number) => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement
            if (scrollTop + clientHeight + 1 > scrollHeight &&
                scrollTop + clientHeight - 1 < scrollHeight) {
                console.log('无限滚动', fieldOption);
                console.log(scrollTop + clientHeight-scrollHeight);
                

                // getMore(list.length, fieldOption)
            }
        }
        f(fieldOption)
    }
    )

    useEffect(() => {
        console.log('useEffect');

        let p
        p = getArticles(fieldOption)
        p.then(response => {
            console.log(fieldOption, response)
            setList(response.data.articles)
        })
    }, [fieldOption])


    return (
        <div className={style.list}>
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
            fieldOption: state.tabField.fieldOption,
            techOption: state.tabTech.techOption
        }
    },
    {

    }
)(List)