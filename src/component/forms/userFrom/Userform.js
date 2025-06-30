import React, { useState } from 'react';

function Userfrom() {
  const [huvdugaar, setHuvdugaar] = useState('');
  const [tsol, setTsol] = useState('');
  const [ovog, setOvog] = useState('');
  const [ner, setNer] = useState('');
  const [gender, setGender] = useState('');
  const [albanTushaal, setAlbanTushaal] = useState('');
  const [ajilsanJil, setAjilsanJil] = useState('');
  const [date, setDate] = useState('');
  const [tasag, setTasag] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      huvdugaar,
      tsol,
      ovog,
      ner,
      gender,
      albanTushaal,
      ajilsanJil,
      date,
      tasag,
      username,
      password,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            onChange={(e) => setHuvdugaar(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="tsol">Цол:</label>
          <input
            type="text"
            id="tsol"
            value={tsol}
            onChange={(e) => setTsol(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ovog">Овог:</label>
          <input
            type="text"
            id="ovog"
            value={ovog}
            onChange={(e) => setOvog(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ner">Нэр:</label>
          <input
            type="text"
            id="ner"
            value={ner}
            onChange={(e) => setNer(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Хүйс:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Сонгоно уу</option>
            <option value="male">Эр</option>
            <option value="female">Эм</option>
            <option value="other">Бусад</option>
          </select>
        </div>

        <div>
          <label htmlFor="albanTushaal">Албан тушаал:</label>
          <input
            type="text"
            id="albanTushaal"
            value={albanTushaal}
            onChange={(e) => setAlbanTushaal(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ajilsanJil">Ажилсан жил:</label>
          <input
            type="number"
            id="ajilsanJil"
            value={ajilsanJil}
            onChange={(e) => setAjilsanJil(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Ажилд орсон он сар өдөр:</label>
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
          <input
            type="text"
            id="tasag"
            value={tasag}
            onChange={(e) => setTasag(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="username">Нэвтрэх нэр:</label>
          <input
            type="text"
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
          <button type="button" onClick={toggleShowPassword} style={{ marginLeft: '10px' }}>
            {showPassword ? 'Нуух' : 'Харах'}
          </button>
        </div>

        <button type="submit">Илгээх</button>
      </form>
    </div>
  );
}

export default Userfrom;
