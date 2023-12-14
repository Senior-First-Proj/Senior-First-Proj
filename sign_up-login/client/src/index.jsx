import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formul from './components/formulaire.jsx'
import Login from './components/Login.jsx'
import axios from 'axios'
const App = () => {
  const [view,setView]=useState("signup")
  const [users,setUsers]=useState([])
//back:
 
const adduser=(user)=>{
  axios("http://localhost:3000/api/users/adduser",user)
  .then(()=>{
    console.log("user added");
  })
  .catch((err)=>{
    console.log(err);
  })
}

useEffect(()=>{
  axios("http://localhost:3000/api/users/getAll")
  .then((res)=>{
    setUsers(res.data)
    console.log("user geted");
  })
  .catch((err)=>{
    console.log(err);
  })
},[])
//function:
const changeView=(x)=>{
  setView(x)
}

const Lverif=(em,pas)=>{
  users.map(el=>{
    if(el.email===em&&el.password===pas){
      return true
    }
  })
  return false
}

const verif_name=(x)=>{
  if(x.length<4){
    return false
  }
  return true
}
const verif_email=(x)=>{
  for(let i=0;i<x.length;i++){
    if(x[i]=='@'){
      return true
    }
    else{
      return false
    }
  }
}
const verif_password=(x,err)=>{
  let num="123456789"
  let carc="&'(-)=}]@^\'[{#~+/*"
  let verif=false
  let count=0
  if(x.length<8){
    verif=true
  }
  else{
    verif=false
    count++
  }
  for(let i=0;i<x.length;i++){
    if(num.includes(x[i])&&carc.includes(x[i])){
      verif=true
    }
    else{
      verif=false
      count++
    }
  }
  if(count>0){
    return false
  }
  else{
    return true
  }
}

  return (
    <div className='bigdiv'>
      {view==="signup"?
      <Formul change={changeView} add={adduser} verifn={verif_name} verife={verif_email} verifp={verif_password} />:
      <Login change={changeView} verif={Lverif} />}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))