import logo from './logo.svg';
import './App.css';
import react,{ useEffect,useState } from 'react';
import axios from 'axios';





function App() {


 // initialize data state variable as an empty array
 const [data, setData] = useState([]);

 // make the fetch the first time your component mounts
 useEffect(() => {
   axios.get("http://localhost:8085/getEmp").then(response => setData(response.data));
 }, []);




  return (
    <div className="App">

          {data.empId}-{data.empName}-{data.empsal}
      
    </div>
  );
}

export default App;
