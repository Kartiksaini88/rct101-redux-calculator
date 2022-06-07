import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addcount, divcount, multicount, redccount } from "../refactor/action"
import { store } from "../refactor/sotre"



export const Calculator = ()=>{
    const counter = useSelector((store)=>store.count)
   
    const dispatch = useDispatch()

    let handlecount = (value)=>{
        if(counter==0 || counter>=0){
            dispatch(addcount(value))
        }  
    }
    let [add , setadd] = useState(0)

    let hadnleadd = (value)=>{
        dispatch(addcount(Number(value)))
        setadd("")
    }
    let hadnledec = (dec)=>{
        dispatch(redccount(Number(dec)))
        setadd("")
    }

    let handlemulit = (value)=>{
        dispatch(multicount(Number(value)))
    }
    let handlediv = (value)=>{
        dispatch(divcount(Number(value)))
    }
    return(
        <div>
            <div className="show_value">{counter}</div>
            <button onClick={()=>{handlecount(1)}}>Increment</button>
            <button onClick={()=>{handlecount(-1)}}>Decrement</button>
            <br />
            <input value={add} type="number" name="" id="" onChange={(e)=>{
                setadd(e.target.value)
            }}/>
            <br />
            <button onClick={()=>{hadnleadd(add)}} className="add">ADD</button>
            <br />
            <button onClick={()=>{hadnledec(add)}} className="add">DECREMENT</button>
            <br />
            <button onClick={()=>{handlemulit(add)}} className="add">Multiply</button>
            <br />
            <button onClick={()=>{handlediv(add)}} className="add">Divide</button>
        </div>
    )
}