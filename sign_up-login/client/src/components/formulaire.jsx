import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

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



function formulaire({change,add,verifn,verife,verifp}) {
  const [fisrtn,setFirstn]=useState("")
  const [lastn,setLastn]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [image,setImage]=useState("")
  const [file,setFile]=useState(null)
  const [showsucc,setShowucc]=useState(false)
  const [showerror,setShowerror]=useState(false)
  const info={
    firstname:fisrtn,
    lastname:lastn,
    email:email,
    password:password,
    image:image
  }
//function
  const hundle=(x,e)=>{
    x(e.target.value)
  }
 
  const success_alert=(x)=>{
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">{x}</Alert>
    </Stack>
    )
  }
  const error_alert=(x)=>{
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="outlined" severity="error">{x}</Alert>
      </Stack>
    )

  }
// upload img 
const uploadImage = ()=>{
  const form =new FormData()
  form.append('file', file)
  form.append("upload_preset" , "aquafish")
  axios.post("https://api.cloudinary.com/v1_1/djc7yq80i/upload",form)
  .then(
      result=>{setImage(result.data.secure_url)}
  )
}
//style
  const style={
    width:"100%",
  }
  const style2={
    "margin-top":"2em"
  }
  const btnstyle={
    "background-color":"rgba(15, 15, 176, 0.893)",
    color:"white",
    "border-radius":"20px",
    "font-size":"15px",
    "padding":"1em",
    "padding-left":"3em",
    "padding-right":"3em",
    "margin-top":"2em",
    "margin-bottom":"3em",
    "margin-left":"4.1em",
  }
  return (
    <>
   
    <div className='divsign'>
      <div>
      <h1>Let's Get Started !</h1>
      <p className='p1'>Create an new account</p>
      </div>
      <div className='divinput'>
    <Box
      style={style2}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      onChange={(e)=>{hundle(setFirstn,e);
        const isValid = verifn(e.target.value);
        setShowerror(!isValid);
        setShowucc(isValid);
      }
      }      
      style={style}
      placeholder='First Name'
      InputProps={{
            startAdornment: (
              <PersonIcon
                sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                fontSize="small"
              />
            ),
          }}  id="outlined-basic" label="First Name :" variant="outlined" />
            {showerror && error_alert('Check your First Name')}
            {showsucc && success_alert('Good')}
    </Box>
    <Box
    style={style2}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  
      onChange={(e)=>{hundle(setLastn,e)}}
      placeholder='Last Name'
      style={style}
      InputProps={{
            startAdornment: (
              <PersonIcon
                sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                fontSize="small"
              />
            ),
          }}  id="outlined-basic" label="Last Name :" variant="outlined" />
    </Box>
    <Box
    style={style2}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      onChange={(e)=>{hundle(setEmail,e)}}
      placeholder='@email.com' 
      style={style}
      InputProps={{
            startAdornment: (
              <EmailIcon
                sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                fontSize="small"
              />
            ),
          }}  id="outlined-basic" label="Email" type='email' variant="outlined" />
    </Box>
    <Box
    style={style2}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
      onChange={(e)=>{hundle(setPassword,e)}}
      placeholder='Password'
      style={style}
      InputProps={{
            startAdornment: (
              <PasswordIcon
                sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                fontSize="small"
              />
            ),
          }}  id="outlined-basic" label="Password" type='password' variant="outlined" />
    </Box>
    <div className='upimg'>
      <label htmlFor="">Your Profile picture :</label> <br />
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload Image
      <VisuallyHiddenInput type="file"
      onChange={(e) => setFile(e.target.files[0])
      } />
      
    </Button>
    <Button onClick={()=>{uploadImage()
    console.log(file)}}>valider</Button>
    </div>
    <Stack spacing={2} direction="row">
      <Button
      style={btnstyle}
      variant="contained">CREATE</Button>
    </Stack>
    </div>
    <label className='label1' htmlFor="">Already have an account?</label><a  onClick={()=>{change("login")}}>Login here</a>
    </div>
    </>
  )
}

export default formulaire