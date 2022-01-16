import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {GoogleLogin,GoogleLogout} from 'react-google-login'

function LoginPage({setLoggedIn}) {
  const handleLogin=(response)=>{
    setLoggedIn(true)
    localStorage.setItem('user', response.profileObj)
  }
  const center = {
    width: "200px",
    height: "200px",
    position: 'absolute',
    top:'0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  }
  return (
      <Container>
        <div style={center}>
          <h3 style={{display:'inline-block'}}>Please Log In</h3>
          <GoogleLogin
            clientId="992099029125-qgo29nus0u715noglo1eehc5qc7t7iuc.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={handleLogin}
            style={{display:'inline-block'}}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </Container>
  );
}

export default LoginPage;