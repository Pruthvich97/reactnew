import React from "react"
import { useParams } from "react-router-dom"
import DashBoardHooksClass from "./DashBoardHooksClass"
function DashBoardHooks(){
    const params = useParams()
    return(
        <>
        <DashBoardHooksClass params={params}></DashBoardHooksClass>
        
        </>
    )
}
 
export default DashBoardHooks