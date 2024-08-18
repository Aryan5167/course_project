
/*import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<SearchBar/>}></Route>
        
      </Routes> 
    </BrowserRouter> 
  );
}

export default App;*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SearchBar from "./components/SearchBar/SearchBar";
import MainLayout from './pages/MainLayout'; // Adjust the path as needed

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

