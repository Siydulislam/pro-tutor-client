import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
