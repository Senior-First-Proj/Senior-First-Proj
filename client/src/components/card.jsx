import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCommentIcon from '@mui/icons-material/AddComment';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function card({user,posts}) {
const [like,setlike]=useState(null)
const [showcmnt,setShowcmnt]=useState(false)



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
                        <p>{el.descriptionPost}</p>
                        </>
                        )}})}
                        
                        <div>
                        <Checkbox onClick={()=>{setlike(like+1)}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Checkbox
                            {...label}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon />}
                            />
                            <AddCommentIcon/>
                        </div>
                      </div>
                </div>
            )})}
      </>
    );
};

export default card