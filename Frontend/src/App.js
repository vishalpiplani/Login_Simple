import Login from './Components/Login';
import Admin from './Components/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:8000/api/`;


function App() {
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <div className="App">
      <BrowserRouter>
      {
        token ?
          <Routes>
            <Route path="/admin" element={<Admin />} />
          </Routes>
          :
          <Login />
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
