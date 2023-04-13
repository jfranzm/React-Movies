import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      { user ? 
          <>
            <NavBar />
            <Routes>
              <Route path="/movies" element={<MoviesListPage />} />
              <Route path="/movies/details" element={<MovieDetailPage />} />
            </Routes>
          </>
          :
          <LoginPage />
    }
    </div>
  );
}

export default App;
