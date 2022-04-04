import { CHANGETYPE } from "../constant";
import { Iaction } from "../reducers/TabType";

export const changeType = (data:Iaction) => ({
    type: CHANGETYPE,
    data
})