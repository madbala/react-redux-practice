import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
import Appin from "./login/index";
import {Home, Admin} from "./pages/index"

class Appout extends React.Component {
  constructor(props) {
    super(props);
    console.log("hope its working");
  }

 

  

  render() {
    
    return ( 
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Appin />}/>
          <Route path="/userhome" exact element={<Home />}/>
          <Route path="/adminhome" exact element={<Admin />}/>
          <Route path="/forgetpassword" exact element={<Admin />}/>

        </Routes>
      </div>
     </Router>
    
    
      
    );
  }
}




export default Appout;