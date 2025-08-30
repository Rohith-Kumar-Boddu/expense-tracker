import { useState } from 'react'
import { Box, Button, TextField, Typography, Link as MLink } from '@mui/material'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Box maxWidth={420} mx="auto">
      <Typography variant="h5" gutterBottom>Login</Typography>
      <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ display: 'grid', gap: 2 }}>
        <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
        <Button variant="contained" type="submit">Login</Button>
        <MLink href="#">Forgot password?</MLink>
        <MLink href="#">Create new account</MLink>
      </Box>
    </Box>
  )
}

