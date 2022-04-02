import { tabTechActionType } from '../actions/tabTech'
import { CHANGETECH } from '../constant'

interface ItabTech {
    techOption:number
}

const initState:ItabTech = {
    techOption: 0
}

export default function tabTechReducer(preState = initState, action: tabTechActionType): ItabTech {
    const { type, data} = action
    switch (type) {
        case CHANGETECH:  
            return data
        default:
            return preState
    }

}