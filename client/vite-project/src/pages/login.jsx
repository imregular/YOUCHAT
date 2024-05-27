// import { Container } from "@mui/system";
// import { Container } from "@mui/system";
import React, { useState } from "react";
import { Container, Paper, TextField, Typography, Button, IconButton,Avatar,Stack } from "@mui/material";

import { height, width } from "@mui/system";
//import { Form } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from "../componets/styleComponents";
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp';
import { usernameValidator } from "../utils/validators";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);

  const name=useInputValidation("");
  const email=useInputValidation("");
  const username=useInputValidation("",usernameValidator);
  const password=useStrongPassword();
  //const username=useInputValidation("",usernameValidator);

  const avatar=useFileHandler("single",2);

  const handleLogin=(e)=>{
    e.preventDefault()
  };
  const handleSignup=(e)=>{
    e.preventDefault();
  }

  return (

    <div style={{
      backgroundImage:"linear-gradient(rgb(255 225 209), rgb(249 259 159))",
    }
    }>
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%", // Ensure Paper takes full width of Container
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained" // Corrected spelling
                color="primary" // Corrected spelling
                type="submit"
                fullWidth
              >
                Login
              </Button>

              <Typography textAlign="center" m="1rem">
                Or
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
            <>
            <Typography variant="h5">Register</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignup}
            >

                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar sx={{
                        width:"10rem",
                        height:"10rem",
                        objectFit: "contain"
                    }}
                    src={avatar.preview}
                    />
                    {
                avatar.error && (
              <Typography color="error" variant="caption">

                {avatar.error}
              </Typography>

                )
              }
                    

                    <IconButton 
                    sx={{
                      position:"absolute",
                      bottom:"0",
                      right:"0",
                      bgcolor:"rgba(0,0,0,0.7)",
                      ":hover":{
                        bgcolor:"rgba(0,0,0,0.7)",
                      },
                      }}
                      component="label"
                      
                      >
                        
                    <CameraAltIcon></CameraAltIcon>
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>


                        
                    </IconButton>

                </Stack>


              <TextField
                required
                fullWidth
                label="name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />

             <TextField
                required
                fullWidth
                label=" email"
                margin="normal"
                variant="outlined"
                value={email.value}
                onChange={email.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {
                username.error && (
              <Typography color="error" variant="caption">

                {username.error}
              </Typography>
                )
              }


              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
               {
                password.error && (
              <Typography color="error" variant="caption">

                {password.error}
              </Typography>
                )
              }

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained" // Corrected spelling
                color="primary" // Corrected spelling
                type="submit"
                fullWidth
              >
                SignUp
              </Button>

              <Typography textAlign="center" m="1rem">
                Or
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
               Sign In 
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;

