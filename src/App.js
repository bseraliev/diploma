import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Labs from './components/Labs';
import Lab from './components/Lab';
import Courses from './components/Courses';
import {useState} from 'react';

function App() {
  const [isLogged, setLogged] = useState(false);
  const navigate = useNavigate();

  const checkLogin = (username, password) => {
    if (username === "admin" && password === "root"){
      navigate('/');
      setLogged(true);
    }else{
      setLogged(false);
      alert("Login or password not correct")
    }
  }  



  const labs = [    
    {
        img:"https://media.gettyimages.com/photos/the-cisco-systems-logo-is-displayed-at-the-mobile-world-congress-in-picture-id1127349614?s=612x612",   
        tag:"Cisco",
        title:"Администрирование сетей с оборудованием Cisco",
        link:`<iframe frameBorder="0" id="TestServerPro1650457144570" src="https://testserver.pro/run/test/Administrirovanie-setey-s-oborudovaniem-Cisco/?mode=embed&id=TestServerPro1650457144570"></iframe><script type="text/javascript" src="https://testserver.pro/js/embed_top.js"></script>`
    },
    {
      img:"https://metapi.pk/wp-content/uploads/2021/07/Cisco.jpg",
      tag:"Cisco",
      title:"Введение в сетевые технологии Cisco часть 1 ",
      link:`<iframe frameBorder="0" id="TestServerPro1650457353486" src="https://testserver.pro/run/test/Vvedenie-v-setevye-tekhnologii-Cisco-chast'-1-(ICND1)/?mode=embed&id=TestServerPro1650457353486"></iframe><script type="text/javascript" src="https://testserver.pro/js/embed_top.js"></script>`
    },
    {
      img:"https://media.datacenterdynamics.com/media/images/cisco_security.original.jpg",
      tag:"Cisco",
      title:"Основы организации сетей Cisco",
      link:`<iframe frameBorder="0" id="TestServerPro1650457400414" src="https://testserver.pro/run/test/Osnovy-organizatsii-setey-Cisco/?mode=embed&id=TestServerPro1650457400414"></iframe><script type="text/javascript" src="https://testserver.pro/js/embed_top.js"></script>`
    },
  ]  
  return (
      <div>
        <Header isLogged={isLogged}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login checkLogin={checkLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/labs" element={<Labs labs={labs}/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lab/:id" element={<Lab labs={labs} />} />
        </Routes>
      </div>

  );
}

export default App;
