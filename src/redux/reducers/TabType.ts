import { CHANGETYPE } from "../constant";

const initState = {
    typeOption: 'hot'
}

export interface Iaction {
    type:string
    data:any
}

export default function tabTypeReducer(preState = initState, action:Iaction) {
    const { type, data } = action
    switch (type) {
        case CHANGETYPE:
            return data
        default:
            return preState
    }
}