import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
