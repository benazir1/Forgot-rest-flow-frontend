
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from './Component/Signup'
import SignIn from "./Component/SignIn"
import Home from "./Component/Home"
import Forgotpassword from "./Component/Forgotpassword"
import Resetpassword from "./Component/Resetpassword"

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
      
    </div>
  )
}

export default App
