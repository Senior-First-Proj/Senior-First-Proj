import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCommentIcon from '@mui/icons-material/AddComment';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function profile({change,oneuser,post,deletePost}) {
    const [image,setImage]=useState("")
    const [file,setFile]=useState(null)
    const [caption,setCaption]=useState("")
    const [iduser,setIduser]=useState(null)
    const [categ,setcateg]=useState(1)
    console.log("id",iduser);
    console.log("one",oneuser);
  let info={
    imagePost:image,
    descriptionPost:caption,
    rate:1,
    users_idusers:iduser,
    categories_idtable2:categ,
  }



    const uploadImage = ()=>{
        const form =new FormData()
        form.append('file', file)
        form.append("upload_preset" , "aquafish")
        axios.post("https://api.cloudinary.com/v1_1/djc7yq80i/upload",form)
        .then(
            result=>{setImage(result.data.secure_url)}
        )
      }
  return (
    <div>
        <div>
         {oneuser.map(el=>(
            <>
            <div className='head_profil'>
            <div className='pdp'>
            <Stack direction="row" spacing={2}>
      <Avatar alt={el.name} src={el.picture} sx={{ width: 156, height: 156 }} />
            </Stack>
            </div>
        <div className='details_profil'>
            <ul>
                <li><h2>My ID : {el.idusers}</h2></li>
                <li><h2>My Name : {el.name} {el.lastname}</h2></li>
                <li><h2>Email : {el.email}</h2></li>
            </ul>
        </div>
        <div className='divbtnprof'>
          <button className='btnprof' onClick={()=>{change("home")}} ><HomeIcon sx={{ width: 60, height: 60 }}/></button>
          <button className='btnprof' ><BookmarksIcon sx={{ width: 60, height: 60 }}/></button>
        </div>
        </div>
        </>
         ))}
         <div className='page_profile'>
            <label htmlFor="">Add New Post +</label>
            <div className='upimg'>
      <label htmlFor="">Add picture :</label> <br />
    <Button component="label" variant="contained" >
      Upload Image
      <VisuallyHiddenInput type="file"
      onChange={(e) => setFile(e.target.files[0])
      } />
      
    </Button>
    <Button onClick={()=>{uploadImage()
    console.log(file)}}>Add<AddAPhotoIcon sx={{ width: 40, height: 40 }} /></Button>
    </div>
    <label htmlFor="">Add caption :</label>
            <textarea onChange={(e)=>{setCaption(e.target.value)}}  placeholder='Add Caption.....' name="" id="" cols="90" rows="20"></textarea><br /><br />
            <button className='addbtn'><AddToPhotosIcon sx={{ width: 40, height: 40 }}/></button>
         </div>
        <div>
        {
            oneuser.map((el,i)=>{
              return(
                <div className='card2'>
                    <div className='headcard'>
                      <Stack direction="row" spacing={2}>
                        <Avatar alt="Cindy Baker" src={el.picture} />
                      </Stack>
                      <h3>{el.name} {el.lastname}</h3>
                      </div>
                      <div>
                        {post.map(el=>(
                          <>
                          <img src={el.imagePost} className='postimg' alt="" />
                        <p className='caption'>{el.descriptionPost}</p>
                        <div><button onClick={()=>{deletePost(el.idposts)}}> Delete </button></div>
                        </>
                        ))}
                         
                      </div>
                </div>
            )})}
        </div>
        </div>

    </div>
  )
}

export default profile