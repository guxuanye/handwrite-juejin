import Article from '../Article/index'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { useEffect, useRef, useState } from 'react'
import { getArticles } from '../../fake-api'
import { nanoid } from 'nanoid'
const style = require('./index.module.less').default

interface Iprops {
    fieldOption: number,
    techOption: number,
    typeOption: string
}

//list 负责去获取筛选文章，传递文章id
function List(props: Iprops) {
    const ref: any = useRef()

    var [list, setList] = useState<any>([])
    var { fieldOption, techOption, typeOption } = props
    fieldOption = techOption === 0 ? fieldOption : fieldOption * 10 + techOption

    var observer = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement
        if (scrollTop + clientHeight + 1 > scrollHeight &&
            scrollTop + clientHeight - 1 < scrollHeight) {
            let p = getArticles(fieldOption, typeOption, ref.current.length, 10)
            p.then(res => {
                ref.current = [...ref.current, ...res.data.articles]
                setList([...ref.current])
            })
        }
    }

    useEffect(() => {
        let f = () => { observer() }
        window.addEventListener('scroll', f)
        let p = getArticles(fieldOption, typeOption)
        p.then(response => {
            ref.current = response.data.articles
            setList(response.data.articles)
        })
        return () => {
            window.removeEventListener('scroll', f)
        }
    }, [fieldOption, typeOption])

    const historyString = localStorage.getItem('list')
    let historyList: Array<any> = []
    if (historyString) {
        historyList = JSON.parse(historyString)
    }

    return (
        <div className={style.list}>
            {
                typeOption !== 'history' ?
                    list.map((listObj: any) => {
                        return <Article 
                                    {...listObj} 
                                    key={nanoid()}
                                >
                                </Article>
                    }) :

                    historyString ?
                        historyList.map((listObj: any) => {
                            return <Article {...listObj} key={nanoid()}></Article>
                        })
                        :
                        <div>当前没有历史记录</div>

            }
        </div>
    )
}

type RootState = ReturnType<typeof store.getState>

export default connect(
    (state: RootState) => {
        return {
            fieldOption: state.tabField.fieldOption,
            techOption: state.tabTech.techOption,
            typeOption: state.tabType.typeOption
        }
    },
    {

    }
)(List)