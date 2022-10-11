import React , {useContext} from "react";
import {useContext} from "../UserContext";
import { UserContext } from "./usecontact";
export function about (){
    
    const{value ,setvalue} =useContext( userContext);
    return( <div>
        <h2>about</h2>
    <div>{value}</div>
    <button onClick={() => setvalue("hello")}>changevalue</button>
        </div>);
}