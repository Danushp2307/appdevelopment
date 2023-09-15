import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App'
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

function App() {
  return(
  <>
   <BrowserRouter>
     <Routes>
      <Route index element={<Login />} />
      <Route path='/Login' index element={<Login />} />
      <Route path='/Register' element={<Register />} />
     </Routes>
   </BrowserRouter>
     </> 
  );
}

export default App;
