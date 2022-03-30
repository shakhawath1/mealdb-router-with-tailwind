import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Home from './components/Home/Home';
import About from './components/About/About';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='meals' element={<Meals></Meals>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='log-in' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
