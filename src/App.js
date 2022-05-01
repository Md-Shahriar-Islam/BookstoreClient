import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Navbar/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import ManageItem from './Components/ManageItem/ManageItem'
import AddItem from './Components/AddItem/AddItem'
import LogIn from './Components/Authentication/LogIn/LogIn';
import Registration from './Components/Authentication/Registraion/Registration'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="manage" element={<ManageItem />} />
        <Route path="add" element={<AddItem />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
