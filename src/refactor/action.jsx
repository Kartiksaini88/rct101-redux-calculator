

export const ADD_COUNT = "ADD_COUNT"
export const DEC_COUNT= "DEC_COUNT"
export const DIV_COUNT="DIV_COUNT"
export const MULTI_COUNT="MULTI_COUNT"

export const addcount = (value)=>{
    return{
        type:ADD_COUNT,
        payload:value
    }
}
export const redccount = (value)=>{
    return{
        type:DEC_COUNT,
        payload:value
    }
}
export const multicount = (value)=>{
    return{
        type:MULTI_COUNT,
        payload:value
    }
}
export const divcount = (value)=>{
    return{
        type:DIV_COUNT,
        payload:value
    }
}