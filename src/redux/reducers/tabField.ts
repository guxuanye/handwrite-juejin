import { CHANGEFIELD, CHANGEFIELDOPTION } from '../constant'
import { tabFieldActionType } from '../actions/tabField'

interface ItabField{
    fieldOption:number,
    field: any
}

const initState = {
    fieldOption: 0,
    field: [{
        category_id: 0,
        category_name: '推荐',
        children: [{
            category_id: 0,
            category_name: '推荐'
        }]
    }]
}

export default function tabFieldReducer(preState = initState, action: tabFieldActionType):ItabField {
    const { type, data } = action
    switch (type) {
        case CHANGEFIELDOPTION:
            return {
                fieldOption: data.fieldOption,
                field: preState.field
            }
        case CHANGEFIELD:
            return {
                field: data.field,
                fieldOption: preState.fieldOption
            }
        default:
            return preState
    }
}
