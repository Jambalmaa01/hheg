    import { Box, Grid, Button } from "@mui/material";
    import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
    import FileTable from '../../table/file/FIleTable';
    import UserTable from '../../table/userTable/UserTable';
    import Dashboard from '../dashboard/Dashboard'
    import DashboardIcon from '@mui/icons-material/Dashboard';
    import PeopleIcon from '@mui/icons-material/People';
    import AttachmentIcon from '@mui/icons-material/Attachment';

    export default function Home() {
        return (
            <BrowserRouter>
                <Grid container direction="column" sx={{ height: '100vh' }}>
                    <Grid item>
                        <Box sx={{ width: '100%', height: 50, backgroundColor: 'gray' }}></Box>
                    </Grid>

                    <Grid item sx={{ flex: 1 }} container>
                        <Grid item>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                                sx={{
                                    width: 250,
                                    height: '100%',
                                    border: 1,
                                    borderColor: 'gray',
                                }}
                            >
                                <Button
                                    component={RouterLink}
                                    to="/Dashboard"
                                    color="inherit"
                                    sx={{ width: 240, marginTop: 5, border: 1, borderColor: 'gray', justifyContent: 'flex-start' }}
                                    startIcon={<DashboardIcon />}
                                >
                                    Үндэсэн өгөгдэхүүн
                                </Button>

                                <Button
                                    component={RouterLink}
                                    to="/UserTable"
                                    color="inherit"
                                    sx={{ width: 240, marginTop: 5, border: 1, borderColor: 'gray', justifyContent: 'flex-start' }}
                                    startIcon={<PeopleIcon />}
                                >
                                    Бие бүрэлдэхүүн
                                </Button>

                                <Button
                                    component={RouterLink}
                                    to="/FileTable"
                                    color="inherit"
                                    sx={{ width: 240, marginTop: 5, border: 1, borderColor: 'gray', justifyContent: 'flex-start' }}
                                    startIcon={<AttachmentIcon />}
                                >
                                    Файл
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item sx={{ flex: 1 }} container>
                            <Routes>
                                <Route path="/Dashboard" element={<Dashboard />} />
                                <Route path="/UserTable" element={<UserTable />} />
                                <Route path="/FileTable" element={<FileTable />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Grid>
            </BrowserRouter>
        );
    }
