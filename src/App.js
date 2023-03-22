import './App.css';
import Nav from './Nav';
import Home from './Home';
import Register from './Register'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NaughtyList from './NaughtyList';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/naughtylist' element={<NaughtyList/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
