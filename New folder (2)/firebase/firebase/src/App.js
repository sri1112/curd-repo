// import logo from './logo.svg';
// import './App.css';
import React, { createContext, useState} from 'react';
import Form from './Form';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Edit from './Edit';
//import ComponentA from './ComponentA';
//import ComponentB from './ComponentB';
import Count from './Count'
import Display from './Display'

export const store = createContext()

function App() {
  const [data,setData] = useState([
    {
      brandName: 'realme'
    },
    {
      brandName: 'nokia'
    },
    {
      brandName: 'mi'
    }
   ])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
      <store.Provider value={[data,setData]}>
        <center>X
          {/* <ComponentA />
          <ComponentB /> */}
          <Count />
          <Display />
          {/* <button onClick={() => setData(data+1)}>incriment</button> */}
        </center>
      </store.Provider>
    </div>
  );
}

export default App;

