
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Clinics from "./pages/Clinics";
import Doctors from "./pages/Doctors";
import Jobs from "./pages/Jobs";
import DocJoin from "./pages/DocJoin";
import DocSignIn from "./pages/DocSignIn";
import PatientJoin from "./pages/PatientJoin";
import PatientSignIn from "./pages/PatientSignIn";
import Message from "./pages/Message";

function App() {
  return (
    <div className="App"> 
      <Router> 
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/clinics" exact element={<Clinics />} />
            <Route path="/doctors" exact element={<Doctors />} />
            <Route path="/jobs" exact element={<Jobs />}  />
            <Route path="/Docjoin" exact element={<DocJoin />} />
            <Route path="/docSignIn" exact element={<DocSignIn />} />
            <Route path="/patientjoin" exact element={<PatientJoin />} />
            <Route path="/patientsignin" exact element={<PatientSignIn />} />
            <Route path="/message" exact element={<Message />} />
        </Routes> 
      </Router>     
    </div>
  );
}

export default App;
