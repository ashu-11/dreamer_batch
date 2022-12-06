import {useState} from "react"
import A from "./components/A"
import './App.css';
import counterConext from "./context/couterContext";

function App() {

  const [counter,setCounter]= useState(10)
  return (
    <div className="App">
      {/* mke app.js as a provider */}
    <counterConext.Provider  value={counter}  >
       <A />
    </counterConext.Provider>
   
    </div>
  );
}

export default App;
