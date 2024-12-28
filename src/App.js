import './App.css';
import React,{useState} from 'react';
import Navv from './Navv';
import { Routes, Route } from 'react-router-dom';
import Composant1 from './Composant1';
import Composant2 from './Composant2';
import Composant3 from './Composant3';
function App() {

  const [salaries] = useState([
    {
      _id: "s1",
      nomsal: "Alami",
      prenomsal: "Sara",
      fonction: "Technicien",
      service: { codeser: "1", nomser: "informatique" },
    },
    {
      _id: "s2",
      nomsal: "Hilal",
      prenomsal: "Hana",
      fonction: "Gestionnaire",
      service: { codeser: "2", nomser: "logistique" },
    },
    {
      _id: "s3",
      nomsal: "Chams",
      prenomsal: "Nabil",
      fonction: "Gestionnaire",
      service: { codeser: "2", nomser: "logistique" },
    },
  ]);


  return (
    <div className="App">
      <Navv/>
      <Routes>
        <Route path='/' element={<Composant1/>}/>
        <Route path="/sal" element={<Composant2 salaries={salaries} />} />
        <Route path="/recherche" element={<Composant3 />} />
      </Routes>
    </div>
  );
}

export default App;
