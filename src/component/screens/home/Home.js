import { Box, Grid, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FileTable from '../../table/file/FIleTable';
import UserTable from '../../table/userTable/UserTable';
import Dashboard from '../dashboard/Dashboard'
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Home() {
    return (
        <BrowserRouter>
        <Grid container direction="column" sx={{ height: '100vh' }}>
            <Grid item>
               <Box sx={{ width: '100%', height: 50, backgroundColor: 'gray' }}></Box>
            </Grid>

            <Grid item sx={{ flex: 1 }} container>
                <Grid item>
                    <Box display="flex" flexDirection='column' alignItems='flex-start' sx={{ width: 200, height: '100%', border:1, borderColor: 'gray', a: { textDecoration: 'none', color: 'inherit' }, }} >
                        <Button>
                            <DashboardIcon/>
                        <Link to="/Dashboard">Үндэсэн өгөгдэхүүн</Link>

                        </Button>
                        <Button>
                            <DashboardIcon/>
                        <Link to="/UserTable"> Хэрэглэгч</Link>

                        </Button>
                        <Button>
                            <DashboardIcon/>
                        <Link  to="/FileTable">Файл</Link>

                        </Button>
                    </Box>
                </Grid>
                <Grid item xs sx={{ padding: 2 }}>
                <Routes>
                    <Route  path="/Dashboard" element={<Dashboard />} />
                    <Route path="/UserTable" element={<UserTable />} />
                    <Route path="/FileTable" element={<FileTable />} />
                </Routes>
                </Grid>
            </Grid>
            </Grid>
        </BrowserRouter>
    );
}                        
