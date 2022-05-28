
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Clinics from "./pages/Clinics";
import Doctors from "./pages/Doctors";
import Jobs from "./pages/Jobs";
import Workers from "./pages/Workers";
import Items from "./pages/Items";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DocJoin from "./pages/DocJoin";
import ShopSignIn from "./pages/ShopSignIn";
import WorkerJoin from "./pages/WorkerJoin";
import WorkerSignIn from "./pages/WorkerSignIn";
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
            <Route path="/workers" exact element={<Workers />} />
            <Route path="/items" exact element={<Items />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/Docjoin" exact element={<DocJoin />} />
            <Route path="/shopsignin" exact element={<ShopSignIn />} />
            <Route path="/workerjoin" exact element={<WorkerJoin />} />
            <Route path="/workersignin" exact element={<WorkerSignIn />} />
            <Route path="/message" exact element={<Message />} />
        </Routes> 
      </Router>     
    </div>
  );
}

export default App;
