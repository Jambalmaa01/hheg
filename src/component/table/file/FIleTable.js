import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Box, Typography, Stack,
  Paper, Button, Modal, IconButton
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fileform from '../../forms/file/FIleform';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#fff',
  border: '2px solid #1976d2',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function FileTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ width: '100%', marginTop: 5, marginLeft: 5 }}>
      <Stack
        spacing={1}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant='button' fontSize={20} color='primary'>
          📁 Файл
        </Typography>
        <Button variant="contained" onClick={() => setOpenModal(true)}>
          Бүртгэх
        </Button>
      </Stack>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={modalStyle}>
          <Fileform onClose={() => setOpenModal(false)} />
        </Box>
      </Modal>

      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 2 }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Үйлдэл</TableCell>
                <TableCell>№</TableCell>
                <TableCell>Файлын төрөл</TableCell>
                <TableCell>Файл нэр</TableCell>
                <TableCell>Бүтээсэн хэрэглэгч</TableCell>
                <TableCell>Огноо</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <IconButton size="small" color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
