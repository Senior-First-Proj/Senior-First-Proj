import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCommentIcon from '@mui/icons-material/AddComment';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Toposts = ({post,user,change}) => {
 const [filtred,setFiltred] = useState([])
console.log("user",user);
console.log("fil",filtred )

const filterFunc = () => {

    for(let k=0; k<user.length; k++) {
        for(let j=0; j<post.length; j++) {
            if((post[j].users_idusers === user[k].idusers)&&(!filtred.includes(user[k])&&(post[j].descriptionPost))){
                filtred.push(user[k])
            }
        }
    }
}

return (<div>
       
    <div>{filterFunc(user,post)}</div>
    <>
    <div><button className='but' onClick={()=>{change("home")}}>Home Page </button></div>
{
filtred.map((e,i)=>{
  return(
    <div className='card' key={i}>
        <div className='headcard'>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Cindy Baker" src={e.picture} />
          </Stack>
          <h3>{e.name} {e.lastname}</h3>
          </div>
          
          <div>
 {post.map((el)=>{
              if(el.users_idusers===e.idusers){
              return(
               el.rate>6 &&( 
               <>
                <img src={el.imagePost} className='postimg' alt="" />
              <p>{el.descriptionPost}</p>
              </>)
             
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
</div>
)

}
export default Toposts;