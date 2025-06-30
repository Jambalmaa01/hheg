import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";


export default function FileTable(){
    return(
          <Box>
            <Box>
                <Table>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                   
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
                               
                            </TableRow>
                        </TableBody>
                    </TableContainer>
                </Table>
            </Box>
        </Box>
    )
}