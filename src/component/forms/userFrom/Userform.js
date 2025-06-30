import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  MenuItem,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function UserForm() {
  const [huvdugaar, setHuvdugaar] = useState('');
  const [tsol, setTsol] = useState('');
  const [ovog, setOvog] = useState('');
  const [ner, setNer] = useState('');
  const [gender, setGender] = useState('');
  const [albanTushaal, setAlbanTushaal] = useState('');
  const [ajilsanJil, setAjilsanJil] = useState('');
  const [date, setDate] = useState('');
  const [tasag, setTasag] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      huvdugaar,
      tsol,
      ovog,
      ner,
      gender,
      albanTushaal,
      ajilsanJil,
      date,
      tasag,
      username,
      password,
    });
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, width: 500 }}>
        <Typography variant="h5" gutterBottom>
          Хувийн мэдээлэл оруулах
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Хувийн дугаар" value={huvdugaar} onChange={(e) => setHuvdugaar(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Цол" value={tsol} onChange={(e) => setTsol(e.target.value)} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Овог" value={ovog} onChange={(e) => setOvog(e.target.value)} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Нэр" value={ner} onChange={(e) => setNer(e.target.value)} required />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Хүйс"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <MenuItem value="">Сонгоно уу</MenuItem>
                <MenuItem value="male">Эр</MenuItem>
                <MenuItem value="female">Эм</MenuItem>
                <MenuItem value="other">Бусад</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Албан тушаал" value={albanTushaal} onChange={(e) => setAlbanTushaal(e.target.value)} required />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth type="number" label="Ажилласан жил" value={ajilsanJil} onChange={(e) => setAjilsanJil(e.target.value)} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="date" label="Ажилд орсон огноо" value={date} onChange={(e) => setDate(e.target.value)} InputLabelProps={{ shrink: true }} required />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Тасаг" value={tasag} onChange={(e) => setTasag(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Нэвтрэх нэр" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Нууц үг"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Хадгалах
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default UserForm;
