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
import axios from 'axios'

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
  const [showsuccfn,setShowuccfn]=useState(false)
  const [showerrorfn,setShowerrorfn]=useState(false)
  const [showsuccln,setShowuccln]=useState(false)
  const [showerrorln,setShowerrorln]=useState(false)
  const [showsuccem,setShowuccem]=useState(false)
  const [showerrorem,setShowerrorem]=useState(false)
  const [showsuccpw,setShowuccpw]=useState(false)
  const [showerrorpw,setShowerrorpw]=useState(false)
  const info={
    name:fisrtn,
    lastname:lastn,
    email:email,
    motdepasse:password,
    picture:image
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
    width:"80%",
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
        <div className='title'>
          <h1>Let's Get Started!</h1>
          <p className='p1'>Create a new account</p>
        </div>
        <div className='divinput'>
          <div className="input-container">
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
                onChange={(e) => {
                  hundle(setFirstn, e);
                  const isValid = verifn(e.target.value);
                  setShowerrorfn(!isValid);
                  setShowuccfn(isValid);
                }}
                style={style}
                placeholder='First Name *'
                InputProps={{
                  startAdornment: (
                    <PersonIcon
                      sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                      fontSize="small"
                    />
                  ),
                }}
                id="outlined-basic"
                label="First Name :"
                variant="outlined"
              />
            </Box>
            <div className='alerta'>
              {showerrorfn && error_alert('Check your First Name')}
              {showsuccfn && success_alert('Checked')}
            </div>
          </div>
          <div className="input-container">
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
      onChange={(e)=>{hundle(setLastn,e)
        const isValid = verifn(e.target.value);
        setShowerrorln(!isValid);
        setShowuccln(isValid);
      }}
      placeholder='Last Name *'
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
    <div className='alerta'>
            {showerrorln && error_alert('Check your Last Name')}
            {showsuccln && success_alert('Checked')}
    </div>
    </div>
    <div className="input-container">
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
      onChange={(e)=>{hundle(setEmail,e)
        const isValid = verife(e.target.value);
        setShowerrorem(!isValid);
        setShowuccem(isValid);
      }}
      placeholder='@email.com *' 
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
    <div className='alerta'>
          {showerrorem && error_alert('Check your email')}
          {showsuccem && success_alert('Checked')}
    </div>
    </div>
    <div className="input-container">
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
      onChange={(e)=>{hundle(setPassword,e)
        const isValid = verifp(e.target.value);
        setShowerrorpw(!isValid);
        setShowuccpw(isValid);
      }}
      placeholder='Password *'
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
    <div className='alerta'>
          {showerrorpw && error_alert('Check your password')}
          {showsuccpw && success_alert('Checked')}
    </div>
    </div>
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
    <div className='btn'>
    <Stack spacing={2} direction="row">
      <Button
      style={btnstyle}
      onClick={()=>{if(verifn(fisrtn)===true&&verifn(lastn)==true&&verife(email)===true&&verifp(password)==true){
        add(info)
      }
    else{
      return alert("check your errors")
    }
    }}
      variant="contained">CREATE</Button>
    </Stack>
    <label className='label1' htmlFor="">Already have an account?</label><a  onClick={()=>{change("login")}}>Login here</a>
    </div>
    </div>
    </div>
    </>
  )
}

export default formulaire;