import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formulaire from './components/Formulaire.jsx'
import Toposts from './components/Toposts.jsx'
import Cat from './components/Cat.jsx'
import Login from './components/Login.jsx'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Navbar from './components/navbar.jsx'
import Page from './components/page.jsx'
import Profile from './components/profile.jsx'

const App = () => {
  const [view,setView]=useState("login")
  const [show,setshow]=useState(true)
  const [users,setUsers]=useState([])
  const [oneUser,setOneuser]=useState([])
  const [posts,setPosts]=useState([])
  const [categ,setCateg]=useState([])
  const [userpost,setUserpost]=useState([])
  const [categpost,setCategpost]=useState([])
  const [commentpost,setCommentpost]=useState([])
  const[refresh,setRefresh]=useState(false)
  console.log("one",oneUser);
  console.log("posts",posts);
  console.log(users);
  console.log("categories",categ );
  console.log("postsuser",userpost);

//back:
 // *********************************Users interaction ***********************//
 //user
 //get All users // 
useEffect(()=>{
  axios.get("http://localhost:3000/api/users/allUsers")
  .then((res)=>{
    setUsers(res.data)
    console.log("user getted");
  })
  .catch((err)=>{console.log(err)})
allposts()
getAllCat()
getComByPost()
getUserPosts()
},[refresh])

// get one User // 
const getOneUser = (idUser) => {
  axios.get(`http://localhost:3000/api/users/oneUser/${idUser}`)
  .then((res)=>{ 
    setOneuser(res.data)
    console.log("One user getted")})
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
//posts
// get All post //
const allposts=()=>{
  axios.get("http://localhost:3000/api/posts/getPosts/allposts")
  .then((res)=>{ setPosts(res.data)
  })
  .catch((err)=>{console.error(err)})
}
// get posts of one selected user // 
const getUserPosts = (idUser) => {
  axios.get(`http://localhost:3000/api/posts/getPostByUser/${idUser}`)
  .then((res)=>{
    setUserpost(res.data)
    console.log("posts of user getted")})
  .catch((err)=>{ console.log(err)})
}
// get Posts by category // 

const getPostsCat = (idCat) => {
  axios.get(`http://localhost:3000/api/posts/getPostByCat/${idCat}`)
  .then((res)=>{
    setCategpost(res.data)
    console.log("posts by category getted")})
  .catch((err)=>{ console.log(err)})
}
// add Post //
const addPost=(post)=>{
  axios.post("http://localhost:3000/api/posts/addPost",post)
  .then(()=>{console.log("Post added")})
  .catch((err)=>{console.log(err)})}

// Delete post //

const deletePost=(idPost)=>{
  axios.delete(`http://localhost:3000/api/posts/deletePost/${idPost}`)
  .then(()=>{setRefresh(!refresh)
  changeView("profile")})
  .catch((err)=>{console.log(err)})}


//category
const getAllCat = () => {
  axios.get("http://localhost:3000/api/categories/allCats")
  .then((res)=>{
    setCateg(res.data)})
  .catch((err)=>{console.log(err)})
}

//comments
// Get comments by post // 
const getComByPost = (idPost) => {
  axios.get(`http://localhost:3000/api/comments/allcomments/${idPost}`)
  .then((res)=>{
    setCommentpost(res.data)
    console.log("Comments by Post getted")})
  .catch((err)=>{ console.log(err)})
}
// Add comment 
const addComment = (newCom) => {
  axios.post(`http://localhost:3000/api/comments/addComment`,newCom)
  .then(()=>{ console.log("Comments added")})
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

const lverif2=(em,pas)=>{
  users.map(el=>{
    if(em === el.email && pas === el.motdepasse){
      getOneUser(el.idusers)
      getUserPosts(el.idusers)
    }
  })
  
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
const render=()=>{
  if(view==="signup"){
    return(
      <>
       {!show&&alert()}
      <div className='bigdiv'>
      <Formulaire change={changeView} add={adduser} verifn={verif_name} verife={verif_email} verifp={verif_password} />
      </div>
      </>
    )
  }
  else if(view==="login"){
    return(
      <div className='bigdiv'>
    <Login change={changeView} alert={Lverif} verif={lverif2} />
    </div>
    )
  }
  else if(view==="profile"){
    return(
      <Profile addpost={addPost} oneuser={oneUser} change={changeView} post={userpost} deletePost={deletePost} categ={categ}/>
    )
  }
  else if(view==="home"){
    return(
      <>
      <Navbar user={oneUser} change={changeView} />
      <Page user={users} addcom={addComment} getcom={getComByPost} comments={commentpost} posts={posts} categ={categ} changeView={changeView} getPostsCat={getPostsCat}/> 
      </>
    )
  }
  else if(view==="top"){
     return( <Toposts user={users} post={posts} change={changeView}/> )
  }
  else if(view ==="cat"){
    return( <Cat user={users} categpost={categpost} change={changeView}/> )
 }
}
  return (
    <>
    {render()}
    </>


  )
}




ReactDOM.render(<App />, document.getElementById('app'))