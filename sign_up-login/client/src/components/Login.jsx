import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Login({change}) {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [showsucc,setShowucc]=useState(false)
const [showerror,setShowerror]=useState(false)
// function
const hundle=(x,e)=>{
    x(e.target.value)
  }


// style
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
      const btnstyle2={
        "display": "flex",
        "flex-direction":" column",
        "align-items":" center",
      }
      const style={
        width:"100%",
      }
      const style2={
        "margin-top":"2em"
      }
  return (
    <div className='divsign'>
        <div>
        <h1>Welcome back!</h1>
        <p className='p2'>Login in to your existant account</p>
        </div>
        <div>
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
          }}  id="outlined-basic" label="Email" variant="outlined" />
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
          }}  id="outlined-basic" label="Password" variant="outlined" />
    </Box>
    <Stack spacing={2} direction="row">
      <Button style={btnstyle} variant="Contained">Login</Button>
    </Stack>
        </div>
        <label className='label1' htmlFor="">Don't have an account?</label><a   onClick={()=>{change("signup")}}>sign up</a>
    </div>
  )
}

export default Login