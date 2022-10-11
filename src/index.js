import React , {useContext, UserContext} from "react";
import { json } from "react-router-dom";
export function Index() {
  const{user ,setuser} =useContext( userContext);
   
  <form><label>
    <input type="text" name ="user"/>

    </label>
    <input type="submit" value = "sumbit"/>
    </form>
  return( <div>
    <h2>home</h2>
<pre>{json.stringify(user , null, 2)}</pre>
<button onClick={async() =>{
  const user = await login();
  setuser(user);
}}
  >
    login
  </button>
  </div>
  );
}
