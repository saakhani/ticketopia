import './App.css';
// import Login from './Login';
// import Signup from './Signup';
import Search from './Search';
import EventPage from './EventPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/EventPage" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




