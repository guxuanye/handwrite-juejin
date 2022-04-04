import { combineReducers } from 'redux'
import tabFieldReducer from './tabField'
import tabTechReducer from './TabTech'
import tabTypeReducer from './TabType'

interface Iprops{
    tabField: any,
    tabTech:any,
    tabType:any
}


export default combineReducers<Iprops>({
    tabField: tabFieldReducer,
    tabTech: tabTechReducer,
    tabType: tabTypeReducer
})