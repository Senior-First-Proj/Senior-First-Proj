import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formulaire from './components/Formulaire.jsx'
import Login from './components/Login.jsx'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Navbar from './components/navbar.jsx'
import Page from './components/page.jsx'
import Profile from './components/profile.jsx'

const App = () => {
  const [view,setView]=useState("login")
  const [users,setUsers]=useState([])
  const [show,setshow]=useState(true)
  console.log(users);
//back:
 
 // *********************************Users interaction ***********************//

 //get All users // 
useEffect(()=>{
  axios.get("http://localhost:3000/api/users/allUsers")
  .then((res)=>{setUsers(res.data)
    console.log("user getted");
  })
  .catch((err)=>{console.log(err)})},[])

// get one User // 
const getOneUser = (idUser) => {
  axios.get(`http://localhost:3000/api/users/oneUser/:${idUser}`)
  .then(()=>{ console.log("One user getted")})
  .catch((err)=>{ console.log(err)})
}


// add new user //
const adduser=(user)=>{
  axios.post("http://localhost:3000/api/users/addUser",user)
  .then(()=>{console.log("user added");
    setshow(false)
  })
  .catch((err)=>{
    console.log(err);
  })
}

useEffect(()=>{
  axios.get("http://localhost:3000/api/categories/allCats")
  .then((res)=>{console.log("all Categories")})
  .catch((err)=>{console.log(err)})
},[])

// add Category //

const addCategory = (newCat) => {
  axios.post(`http://localhost:3000/api/categories/addCat`,newCat)
  .then(()=>{ console.log("Category added")})
  .catch((err)=>{ console.log(err)})
}

// Delete Category // 
const deleteCategory = (catName) => {
  axios.delete(`http://localhost:3000/api/categories/deleteCat/:${catName}`)
  .then(()=>{ console.log("Category deleted")})
  .catch((err)=>{ console.log(err)})
}



//function:
const changeView=(x)=>{
  setView(x)
}



const Lverif=(em,pas)=>{
  const user = users.find(el => em === el.email && pas === el.motdepasse);
  return !!user;
}

const verif_name=(x)=>{
  if(x.length<4){
    return false
  }
  return true
}
const verif_email=(x)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(x);
}
const verif_password = (x) => {
  const num = "123456789";
  const carc = "&'(-)=}]@^'[{#~+/*";
  let verif = true;

  if (x.length < 8) {
    verif = false;
  }

  let hasDigit = false;
  let hasSpecialChar = false;

  for (let i = 0; i < x.length; i++) {
    if (num.includes(x[i])) {
      hasDigit = true;
    } else if (carc.includes(x[i])) {
      hasSpecialChar = true;
    }
  }

  if (!hasDigit) {
    verif = false;
  }

  if (!hasSpecialChar) {
    verif = false;
  }

  return verif;
};


const alert=()=>{
  return(
    <>
        <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        User Added !
      </Alert>
    </Stack>
    </>
  )
}
  return (
    <>
    {/* {!show&&alert()}
    <div className='bigdiv'>
      {view==="signup"?
      <Formul change={changeView} add={adduser} verifn={verif_name} verife={verif_email} verifp={verif_password} />:
      <Login change={changeView} verif={Lverif} />}
    </div> */}
  {/* <Navbar user={users}/>
  <Page user={users}/> */}
  <Profile/>
    </>


  )
}

ReactDOM.render(<App />, document.getElementById('app'))