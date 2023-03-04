import './App.css';
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Todos from "./Pages/Todos";
import Auth from "./Components/Auth/Auth";
function App() {

  return (
    <div className="App">
        <Navbar/>



      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
          
          <Route element={<Auth/>}>
            <Route path="/todos" element={<Todos/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
