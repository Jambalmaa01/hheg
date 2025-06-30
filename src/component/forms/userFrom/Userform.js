import React, { useState } from 'react';

function Userfrom() {
    const [huvdugaar, sethuvdugaar] = useState('');
    const [tsol, setTsol] = useState('');
    const [ovog, setOvog] = useState('');
    const [ner, setNer] = useState('');
    const [albanTushaal, setAlbanTushaal] = useState('');
    const [ajilsanJil, setAjilsanJil] = useState('');
    const [date, setDate]= userState('');
    const [tasag, setTasag]= userState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  // Формын submit үйлдэл
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ovog:', ovog);
};

    return (
    <div>
        <h1>Хувийн мэдээлэл оруулах</h1>
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
            <label htmlFor="tsol">Цол:</label>
            <input
            type="tsol"
            id="tsol"
            value={tsol}
            onChange={(e) => setTsol(e.target.value)}
            required
        />
        </div>
        <div>
            <label htmlFor="ovog">Овог:</label>
            <textarea
            id="ovog"
            value={ovog}
            onChange={(e) => setOvog(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="ner">Нэр:</label>
            <textarea
            id="ner"
            value={ner}
            onChange={(e) => setNer(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="albanTushaal">Албан тушаал:</label>
            <textarea
            id="albanTushaal"
            value={albanTushaal}
            onChange={(e) => setAlbanTushaal(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor='ajilsanJil'>Ажилсан жил</label>
            <input
                type="ajilsanJil"
                id="ajilsanJil"
                value={ajilsanJil}
                onChange={(e) => setAjilsanJil(e.target.value)}
                required
            />
        </div>
        <div>
            <label htmlFor='date'>Ажилд орсон он сар өдөр</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
        </div>
        <div>
            <label htmlFor="tasag">Тасаг:</label>
            <textarea
            id="tasag"
            value={tasag}
            onChange={(e) => setTasag(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="username">Нэвтрэх нэр:</label>
            <textarea
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="password">Нууц үг:</label>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <button type="submit">Илгээх</button>
        </form>
    </div>
);
}

export default Userfrom;
