import './App.css';
import { Display } from './Display';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {createContext,Provider,useState,useEffect} from "react"
import Axios from 'axios'
export const ApplicationContext = createContext();
function App() {
  const [sample,setSample] = useState([])
  useEffect(()=>{
    const getData = async() =>{
        const resp =await Axios.get("http://localhost:5000/data");
        setSample(resp.data);
        console.log(resp.data);
    }
    getData();
   },[])
  return (
    <ApplicationContext.Provider value={{sample , setSample}}>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Display/>}></Route>
        </Routes>
      </Router>
      
    </div>
    </ApplicationContext.Provider>
  );
}

export default App;
