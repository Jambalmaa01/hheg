import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Stack, Paper } from "@mui/material";

export default function UserTable() {
    return (
        <Box sx={{ width: '100%'}}>
            <Stack
        spacing={1}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant='button' fontSize={20} color='primary'>
          Бие бүрэлдэхүүн
        </Typography>
      </Stack>
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
