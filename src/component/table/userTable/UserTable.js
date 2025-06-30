import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";

export default function UserTable() {
    return (
        <Box>
            <Box>
                <TableContainer>
                    <Table>
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
            </Box>
        </Box>
    );
}
