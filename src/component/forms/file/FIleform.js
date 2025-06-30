import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';

function Fileform() {
  const [huvdugaar, setHuvdugaar] = useState('');
  const [fileTurul, setFileTurul] = useState('');
  const [file, setFile] = useState(null);
  const [date, setDate] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log({
        хувийн_дугаар: huvdugaar,
        файлын_төрөл: fileTurul,
        файл: file,
        огноо: date,
      });
    } else {
      console.log('Файл сонгоогүй байна.');
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, width: 500 }}>
        <Typography variant="h5" gutterBottom>
          Файл мэдээлэл оруулах
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Хувийн дугаар"
                fullWidth
                value={huvdugaar}
                onChange={(e) => setHuvdugaar(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Файлын төрөл</InputLabel>
                <Select
                  value={fileTurul}
                  label="Файлын төрөл"
                  onChange={(e) => setFileTurul(e.target.value)}
                >
                  <MenuItem value="">Сонгоно уу</MenuItem>
                  <MenuItem value="file">Файл</MenuItem>
                  <MenuItem value="image">Зураг</MenuItem>
                  <MenuItem value="other">Бусад</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" component="label" fullWidth>
                Файл сонгох
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  required
                />
              </Button>
              {file && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Сонгосон файл: {file.name}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Он сар өдөр"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
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

export default Fileform;
