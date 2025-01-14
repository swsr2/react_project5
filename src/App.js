import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import Moviepage from './pages/Movies/Moviepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Moviepage />} />
        <Route path="movie/:id" element={<MovieDetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes >
  );
}

export default App;

