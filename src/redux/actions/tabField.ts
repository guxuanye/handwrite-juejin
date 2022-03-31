import { CHANGEFIELD, CHANGEFIELDOPTION } from "../constant"

export interface tabFieldActionType {
    type: string,
    data: any
}

export const changeFieldOption = (data: any):tabFieldActionType => {
    return {
        type: CHANGEFIELDOPTION,
        data
    }
}
export const changeField = (data: any):tabFieldActionType => {
    return {
        type: CHANGEFIELD,
        data
    }
}