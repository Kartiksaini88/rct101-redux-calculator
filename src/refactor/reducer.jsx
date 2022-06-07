import { ADD_COUNT, DEC_COUNT, DIV_COUNT, MULTI_COUNT } from "./action";




export const reducer = (store , {type,payload})=>{

    switch(type){
        case ADD_COUNT: return{...store,count:store.count+payload }
        case DEC_COUNT:return{...store , count:store.count-payload}
        case MULTI_COUNT:return{...store , count:store.count*payload}
        case DIV_COUNT : return{...store , count:store.count/payload}
        default:return store
    }
}