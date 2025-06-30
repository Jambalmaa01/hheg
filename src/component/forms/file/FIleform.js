import React, { useState } from 'react';

function Filefrom() {
    const [huvdugaar, sethuvdugaar] = useState('');
    const [fileTurul, setFileTurul] = userState('');
    const [file, setFile] = useState(null);
    const [date, setDate]= userState('');

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
};

  // Формын submit үйлдэл
    const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
        console.log('Сонгосон файл:', file);
    } else {
        console.log('Файл сонгоогүй байна.');
    }
};

    return (
    <div>
        <h1>Файл мэдээлэл оруулах</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="huvdugaar">Хувийн дугаар:</label>
            <input
                type="text"
                id="huvdugaar"
                value={huvdugaar}
                onChange={(e) => sethuvdugaar(e.target.value)}
                required
            />
        </div>
        <div>
            <label htmlFor="fileTurul">Файлын төрөл:</label>
            <select
                id="fileTurul"
                value={fileTurul}
                onChange={(e) => setFileTurul(e.target.value)}
                required
            >
                <option value="">Сонгоно уу</option>
                <option value="file">Файл</option>
                <option value="image">Зураг</option>
                <option value="other">Бусад</option>
            </select>
        </div>
        <div>
            <label htmlFor="file">Файл сонгох:</label>
            <input
                type="file"
                id="file"
                onChange={handleFileChange}
                required
            />
        </div>
        <div>
            <label htmlFor='date'>Он сар өдөр</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
        </div>
        <button type="submit">Илгээх</button>
        </form>
    </div>
);
}

export default Filefrom;
