import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import Cards from './components/Cards';

function App() {

  const [data, setData] = useState([]);

  const updateDataHandler = (d) => {
    setData(d);
  }



  return (
    <div className="App">
      <div className='navbar'>
        <div className='navbar-logo'>Social <span className='logo-right'>Boat</span></div>
        <Search onDataChange={updateDataHandler} />
        <div className='navbar-profile'>AB</div>
      </div>
      <Cards data={data} />
    </div>
  );
}

export default App;
