
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from './Component/Signup'
import SignIn from "./Component/SignIn"
import Home from "./Component/Home"
import Forgotpassword from "./Component/Forgotpassword"
import Resetpassword from "./Component/Resetpassword"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <div>
    <Router>
      <Routes>
      <Route path="/SignIn" element={<SignIn/>}> </Route>  
      <Route path="/signup" element={<Signup/>}> </Route>  
      <Route path="/" element={<Home/>}> </Route>  
      <Route path="/forgot-password" element={<Forgotpassword/>}> </Route> 
      <Route path="/reset-password/:id/:token" element={<Resetpassword/>}> </Route> 
      </Routes>
       
   
    </Router>
    <ToastContainer theme="dark"/>
      
    </div>
  )
}

export default App
