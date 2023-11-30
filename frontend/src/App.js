import './App.css';
// import Login from './Login';
// import Signup from './Signup';
import Search from './Search';
import EventPage from './EventPage';
import BookedPage from './BookedPage';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/Search/:SearchBoxQuery' element={<Search />} />
        <Route path="/EventPage/:EventID" element={<EventPage />} />
        <Route path="/EventPage/BookedPage" element={<BookedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




