import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Alert
} from '@mui/material';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('И-мэйл болон нууц үгээ бөглөнө үү.');
      return;
    }

    setError('');
    console.log('Login:', { username, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component={Paper}
        elevation={3}
        p={4}
        mt={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h5" gutterBottom>
          Нэвтрэх
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Нэвтрэх нэр"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Нууц үг"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Нэвтрэх
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
