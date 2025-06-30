// import React, { useEffect, useState } from 'react';
// import { Button, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
// import axios from 'axios';

// export default function ReportPage() {
//   const [report, setReport] = useState([]);
//   const [totalUsers, setTotalUsers] = useState(0);

//   useEffect(() => {
//     axios.get('/api/report/json').then((res) => {
//       setReport(res.data.fileStats);
//       setTotalUsers(res.data.totalUsers);
//     });
//   }, []);

//   const handleDownloadExcel = () => {
//     window.open('/api/report/excel', '_blank');
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <Typography variant="h5" gutterBottom>
//         📊 Нийт хэрэглэгч: {totalUsers}
//       </Typography>

//       <Button variant="contained" color="success" onClick={handleDownloadExcel}>
//         Excel тайлан татах
//       </Button>

//       <Table sx={{ marginTop: 3 }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Огноо</TableCell>
//             <TableCell>Файлын тоо</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {report.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.date}</TableCell>
//               <TableCell>{row.file_count}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
