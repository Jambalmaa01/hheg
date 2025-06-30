import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Box, Typography, Stack,
  Paper, Button, Modal, IconButton
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Userform from '../../forms/userFrom/Userform';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fff',
  border: '2px solid #1976d2',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function UserTable() {
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
          👤 Бие бүрэлдэхүүн
        </Typography>
        <Button variant="contained" onClick={() => setOpenModal(true)}>
          Бүртгэх
        </Button>
      </Stack>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={modalStyle}>
          <Userform onClose={() => setOpenModal(false)} />
        </Box>
      </Modal>

      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 2 }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Үйлдэл</TableCell>
                <TableCell>Хувийн дугаар</TableCell>
                <TableCell>Цол</TableCell>
                <TableCell>Овог</TableCell>
                <TableCell>Нэр</TableCell>
                <TableCell>Албан тушаал</TableCell>
                <TableCell>Ажилласан жил</TableCell>
                <TableCell>Тасаг</TableCell>
                <TableCell>Нэвтрэх нэр</TableCell>
                <TableCell>Нууц үг</TableCell>
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
