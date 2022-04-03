import { CHANGETECH } from "../constant"

export interface tabTechActionType {
    type: string,
    data: Idata
}

interface Idata {
    techOption: number
}

export const changeTech = (data: Idata):tabTechActionType => {    
    return {
        type: CHANGETECH,
        data
    }
}