import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

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
function profile({user,posts}) {
    const [image,setImage]=useState("")
    const [file,setFile]=useState(null)

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
         {user.map(el=>(
            <>
            <div>
            <Stack direction="row" spacing={2}>
      <Avatar alt={el.name} src={el.picture} sx={{ width: 56, height: 56 }} />
            </Stack>
            </div>
        <div>
            <ul>
                <li><h2>ID_user : {el.idusers}</h2></li>
                <li><h2>Name & LastName : {el.name}_{el.lastname}</h2></li>
                <li><h2>Email : {el.email}</h2></li>
            </ul>
        </div>
        </>
         ))}
         <div>
            <label htmlFor="">Add New Post</label>
            <div className='upimg'>
      <label htmlFor="">Add picture :</label> <br />
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload Image
      <VisuallyHiddenInput type="file"
      onChange={(e) => setFile(e.target.files[0])
      } />
      
    </Button>
    <Button onClick={()=>{uploadImage()
    console.log(file)}}><AddAPhotoIcon/></Button>
    </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Post <AddToPhotosIcon/></button>
         </div>
        <div>
        {posts.map(el)}
        </div>
        </div>

    </div>
  )
}

export default profile