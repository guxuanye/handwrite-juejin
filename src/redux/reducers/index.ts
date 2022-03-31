import { combineReducers } from 'redux'
import tabFieldReducer from './tabField'
import tabTechReducer from './TabTech'

interface Iprops{
    tabField: any,
    tabTech:any
}


export default combineReducers<Iprops>({
    tabField: tabFieldReducer,
    tabTech: tabTechReducer
})