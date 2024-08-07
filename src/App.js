import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Createlead from './components/Createlead';
import Readlead from './components/Readlead';
import Updatelead from './components/Updatelead';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Readlead/>}/>
            <Route path='/create' element={<Createlead/>}/>
            <Route path='/updateLead/:id' element={<Updatelead/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
