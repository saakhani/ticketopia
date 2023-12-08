import './App.css';
// import Login from './Login';
// import Signup from './Signup';
import Search from './pages/SearchPage';
import EventPage from './pages/EventPage';
import BookedPage from './pages/BookedPage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/search/:SearchBoxQuery' element={<Search />} />
          <Route path="/EventPage/:EventID" element={<EventPage />} />
          <Route path="/EventPage/BookedPage" element={<BookedPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;




