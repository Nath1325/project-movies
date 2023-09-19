import './App.css';
import Sidenav from './components/Sidenav';
import {Route, Routes, Navigate} from 'react-router-dom'
import Movies from './pages/Movies';
import Directors from './pages/Directors';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [sort, setSort] = useState("notes+");
  const [addMovie, setAddMovie] = useState(false);

  useEffect(() => {
    console.log(inputText);
  }, [inputText])

  return (
    <div>
      <div className='sidenav'>
        <Sidenav/>
      </div>

      <div className="rightSideWrapper">

        <div className='header'>
          <Header setInputText={setInputText} sort={sort} setSort={setSort} addMovie={addMovie} setAddMovie={setAddMovie} />
        </div>

        <div className='content-box'>

          <div className='main-content'>
            <Routes>
                <Route path="/" element={<Navigate to="/movies" replace />}/>
                <Route path="/movies" element={<Movies inputText={inputText} sort={sort} addMovie={addMovie} setAddMovie={setAddMovie} />} />
                <Route path="/directors" element={<Directors inputText={inputText} />} />
            </Routes>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
