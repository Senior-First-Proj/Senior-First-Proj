import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Badge from '@mui/material/Badge';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function card({user,posts,comments,getcom,addcom}) {
const [like,setlike]=useState(null)
const [showcmnt,setShowcmnt]=useState(false)
const [newcomment,setNewcomment]=useState("")

useEffect(()=>{
  comments
},[])

    console.log(like);
    console.log("userhere",user);
    return (
        <>

            {
            user.map((el,i)=>{
              return(
                <div className='card'>
                    <div className='headcard'>
                      <Stack direction="row" spacing={2}>
                        <Avatar alt="Cindy Baker" src={el.picture} />
                      </Stack>
                      <h3>{el.name} {el.lastname}</h3>
                      </div>
                      <div>
                        {posts.map(el=>{
                         
                          if(el.users_idusers===i+1){
                          return(
                          <>
                          <img src={el.imagePost} className='postimg' alt="" />
                        <p className='caption'>{el.descriptionPost}</p>
                        <div>
                        <Badge badgeContent={el.rate} color="primary">
                        <Checkbox onClick={()=>{setlike(like+1)}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </Badge>
                        <Checkbox
                            {...label}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon />}
                            />
                            <button onClick={()=>{getcom(el.idposts)}} >
                            <AddCommentIcon/>
                            </button>
                        
                        </div>
                        {comments.map(ell=>{
                              console.log('heyy',ell,el);
                              if(ell.posts_idposts===el.idposts){
                                return (
                                  <div>
                                    <h3>{ell.comment}</h3>
                                  </div>
                                )
                              }
                            })}
                            <input type="text" onChange={(e)=>{setNewcomment(e.target.value)}} placeholder='Add Comment' /> 
                                    <button onClick={()=>{addcom({comment:newcomment,posts_idposts:el.idposts})}} >+</button>
                        </>
                        )}})}
                        
                      </div>
                      
                </div>
                
            )})}
      </>
    );
};

export default card