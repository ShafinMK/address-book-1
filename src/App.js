import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Peoples from './components/Peoples/Peoples';
import About from './components/About/About';
import Header from './components/Header/Header';
import PersonDetails from './components/PersonDetails/PersonDetails';
import NotFound from './components/Not Found/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Peoples></Peoples> */}
     
      <BrowserRouter>
      <Header></Header>
      <Routes>
        
        <Route path="/peoples" element={<Peoples></Peoples>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/details/:personID" element={<PersonDetails></PersonDetails>}></Route>
        <Route path="/" element={<Peoples></Peoples>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
