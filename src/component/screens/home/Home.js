import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FileTable from '../../table/file/FIleTable';
import UserTable from '../../table/userTable/UserTable';

export default function Home() {
    return (
        <BrowserRouter>
            <Box>
                <Box id='Box0'>
                    <Box id='dvi01'>
                        <Link to="/">Үндэсэн өгөгдэхүүн</Link>
                        <Link to="/UserTable">Хэрэглэгч</Link>
                        <Link to="/FileTable">Файл</Link>
                    </Box>
                </Box>
                <Box id='Box1'></Box>
                <Routes>
                    <Route path="/UserTable" element={<UserTable />} />
                    <Route path="/FileTable" element={<FileTable />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}
