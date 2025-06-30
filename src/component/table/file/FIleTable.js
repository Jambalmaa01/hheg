import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Stack, Paper } from "@mui/material";


export default function FileTable(){
    return(
         
        <Box sx={{ width: '100%', marginTop:5, marginLeft:5}}>
            <Stack
        spacing={1}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant='button' fontSize={20} color='primary'>
          Файл
        </Typography>
      </Stack>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 600, width:'100%' }}>
                    <Table stickyHeader >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                   
                                </TableCell>
                                <TableCell>
                                    Файл төрөл
                                </TableCell>
                                <TableCell>
                                    Файл 
                                </TableCell>
                                <TableCell>
                                    Бүтгэсэн хэрэглэгч
                                </TableCell>
                                <TableCell>
                                    Бүтгэсэн он сар
                                </TableCell>
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
    )
}