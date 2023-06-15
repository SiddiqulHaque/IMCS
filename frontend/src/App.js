import Home from "./pages/Home/home";
import "./app.css"
import Header from "./components/Header/header";
import Create from "./pages/Create/create";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Singletaskpage from "./pages/Singletaskpage/singletaskpage";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create />} />
        <Route path="/task/:taskid" element={<Singletaskpage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
