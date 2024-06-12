import { useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from '../components/common/Footer';

const Signup = () => {
  const [loading, setLoading] = useState(false)

  const [nameErrText, setNameErrText] = useState('')
  const [lastNameErrText, setLastNameErrText] = useState('')
  const [emailErrText, setEmailErrText] = useState('')
  const [passwordErrText, setPasswordErrText] = useState('')
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameErrText('')
    setLastNameErrText('')
    setEmailErrText('')
    setPasswordErrText('')
    setConfirmPasswordErrText('')

    const data = new FormData(event.target)
    
    const firstName = data.get('firstName').trim()
    const lastName = data.get('lastName').trim()
    const email = data.get('email').trim()
    const password = data.get('password').trim()
    const confirmPassword = data.get('confirmPassword').trim()

    let err = false

    if (firstName === '') {
      err = true
      setNameErrText('* Name is required')
    }
    if (lastName === '') {
      err = true
      setLastNameErrText('* Last Name is required')
    }
    if (email === '') {
      err = true
      setEmailErrText('* Email is required')
    }
    if (password === '') {
      err = true
      setPasswordErrText('* Password is required')
    }
    if (password !== confirmPassword) {
      err = true
      setConfirmPasswordErrText('* Passwords do not match')
    }

    if (err) return

    const formValues = Object.fromEntries(data.entries());

    // Submit the form if no errors
    console.log('Form submitted', formValues);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={nameErrText !== ''}
                helperText={nameErrText}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                error={lastNameErrText !== ''}
                helperText={lastNameErrText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailErrText !== ''}
                helperText={emailErrText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={passwordErrText !== ''}
                helperText={passwordErrText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                error={confirmPasswordErrText !== ''}
                helperText={confirmPasswordErrText}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/login" variant="body2" sx={{ textDecoration: 'none'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer/>
    </Container>
  );
}

export default Signup