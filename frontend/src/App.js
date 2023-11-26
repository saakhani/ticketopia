import './App.css';
// import Login from './Login';
// import Signup from './Signup';
import Search from './Search';
import UserInputBox from './UserInputBox';
import Wireframe from './Wireframe'; // Import your Wireframe component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> */}
        <Route path="/" element={<Search />} />
        <Route path="/Wireframe" element={<Wireframe />} /> {/* New route for the wireframe form */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;




