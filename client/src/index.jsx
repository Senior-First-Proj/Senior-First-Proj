import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formul from './components/formulaire.jsx'
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
  .catch((err)=>{console.log(err)})}

// delete user // 

const deleteUser = (idUser) => {
  axios.delete(`http://localhost:3000/api/users/deleteUser/:${idUser}`)
  .then(()=>{ console.log("user deleted")})
  .catch((err)=>{ console.log(err)})
}


// update User // 

const updateUser = (idUser,newdat) => {
  axios.put(`http://localhost:3000/api/users/updateUser/:${idUser}`,newdat)
  .then(()=>{ console.log("user updated")})
  .catch((err)=>{ console.log(err)})
}

 // *********************************Posts interaction ***********************//
//get All posts // 

useEffect(()=>{
  axios.get("http://localhost:3000/api/posts/getPosts/allposts")
  .then((res)=>{console.log("all posts")})
  .catch((err)=>{console.log(err)})
},[])

// get posts of one selected user // 
const getUserPosts = (idUser) => {
  axios.get(`http://localhost:3000/api/posts/getPostByUser/:${idUser}`)
  .then(()=>{ console.log("posts of user getted")})
  .catch((err)=>{ console.log(err)})
}

// get Posts by category // 

const getPostsCat = (idCat) => {
  axios.get(`http://localhost:3000/api/posts/getPostByCat/:${idCat}`)
  .then(()=>{ console.log("posts by category getted")})
  .catch((err)=>{ console.log(err)})
}

// add Post //
const addPost=(post)=>{
  axios.post("http://localhost:3000/api/posts/addPost",post)
  .then(()=>{console.log("Post added")})
  .catch((err)=>{console.log(err)})}

// delete Post // 
const deletePost=(idPost)=>{
  axios.delete(`http://localhost:3000/api/posts/deletePost/:${idPost}`)
  .then(()=>{console.log("Post deleted")})
  .catch((err)=>{console.log(err)})}

// update Post // 

const updatePost=(idPost,newData)=>{
  axios.put(`http://localhost:3000/api/posts/updatePost/:${idPost}`,newData)
  .then(()=>{console.log("Post updated")})
  .catch((err)=>{console.log(err)})}

 // *********************************Comments interaction ***********************//
// Get comments by post // 
 const getComByPost = (idPost) => {
  axios.get(`http://localhost:3000/api/comments/allcomments/:${idPost}`)
  .then(()=>{ console.log("Comments by Post getted")})
  .catch((err)=>{ console.log(err)})
}

// Add comment 
const addComment = (newCom) => {
  axios.post(`http://localhost:3000/api/comments/addComment`,newCom)
  .then(()=>{ console.log("Comments added")})
  .catch((err)=>{ console.log(err)})
}
// Delete comment //
const deleteComment = (idCom) => {
  axios.delete(`http://localhost:3000/api/comments/deleteCom/:${idCom}`)
  .then(()=>{ console.log("Comments deleted")})
  .catch((err)=>{ console.log(err)})
}

// Update Comment //

const updateComment = (idCom,newD) => {
  axios.put(`http://localhost:3000/api/comments/updateCom/:${idCom}`,newD)
  .then(()=>{ console.log("Comments updated")})
  .catch((err)=>{ console.log(err)})
}

 // *********************************Categories interaction ***********************//

// get All categories // 
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