import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Stack, Paper, Button } from "@mui/material";
import Userform from '../../forms/userFrom/Userform';

export default function UserTable() {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <Box sx={{ width: '100%', marginTop:5, marginLeft:5}}>
            <Stack
        spacing={1}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant='button' fontSize={20} color='primary'>
          Бие бүрэлдэхүүн
        </Typography>
        <Button onClick={handleToggleForm}>Бүртгэх</Button>
        
      </Stack>
      {showForm && <Userform />}
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 600, width:'100%' }}>
                    <Table stickyHeader >
                        <TableHead>
                            <TableRow>
                                <TableCell>Хувийн дугаар</TableCell>
                                <TableCell>Цол</TableCell>
                                <TableCell>Овог</TableCell>
                                <TableCell>Нэр</TableCell>
                                <TableCell>Албан тушаал</TableCell>
                                <TableCell>Ажилласан жил</TableCell>
                                <TableCell>Тасаг</TableCell>
                                <TableCell>Нэвтрэх нэр</TableCell>
                                <TableCell>Пасспорт</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
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
