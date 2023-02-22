import Display from '../Displaypage/OfficeSpaces';
import Education from '../Displaypage/Education'
import Restaurant from '../Displaypage/restaurant';
import Register from '../Register/Register';
import Navbar from '../Navbar';
import Desk from '../Displaypage/Desk';
import Login from '../Login/Login'
import Aboutus from '../Aboutus/Aboutsus';
import Footer from '../footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Homepage1 from './Homepage1';
function Homepage() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
     <Switch>
      <Route  exact path='/'component={Homepage1}></Route>
     <Route path='/login'component={Login}/>
     <Route path='/register' component={Register}/>
     <Route path='/aboutus'component={Aboutus}/>
     <Route path='/home'component={Homepage1}/> 
     <Route path='/display'component={Display}/> 
     <Route path='/education'component={Education}/> 
     <Route path='/restaurant'component={Restaurant}/> 
     <Route path='/desk'component={Desk}/> 
    
     </Switch>
    
    

      
    </BrowserRouter>
     
     <Footer/>
    
   </>
  );
}

export default Homepage;
