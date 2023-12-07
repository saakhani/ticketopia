import './App.css';
// import Login from './Login';
// import Signup from './Signup';
import Search from './pages/SearchPage';
import EventPage from './pages/EventPage';
import BookedPage from './pages/BookedPage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/search/:SearchBoxQuery' element={<Search />} />
        <Route path="/EventPage/:EventID" element={<EventPage />} />
        <Route path="/EventPage/BookedPage" element={<BookedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




