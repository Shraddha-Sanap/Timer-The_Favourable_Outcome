
import { useState } from "react"
import './sgup.css'
export const Signup=()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const [submit,setSubmit]=useState("")
    const [checkbox,setCheckbox]=useState("")

    return(
           <>
           <div className="outer">
           <div className="img">
           <img src="./img/nap.jpeg"/>
           </div>
          
           <div className="login">
           <img  className="img1" src="./img/lock-512_72375.png" height={"50px"} width={"50px"} />
           <h1>Sign in</h1>
           <input type="text" className="mail" placeholder="Email Address*" onChange={(e)=>setEmail(e.target.value)}/><br/>
           <input type="text" className="pass" placeholder="Password*" onChange={(e)=>setPassword(e.target.value)}/><br/>
           <input class="check" type="checkbox" value={checkbox} onClick={(e)=>setCheckbox(e.target.checked)}/>
           <label class="lab3">Remember me</label><br/>
           <button  class="btn" onClick="submit">SING IN</button><br/>
           <a  className="link" href="edfghj">Forgot password?</a>
           <a href="jmnghgb">Don't have an acocunt?Sign UP</a><br/>
           <label className="lab2">Copyright@<u>Your Website</u>2023</label>

           </div>
           </div>
           </>
    )

}