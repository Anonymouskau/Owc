import Display from '../Displaypage/OfficeSpaces';
import Education from '../Displaypage/Education'
import Restaurant from '../Displaypage/restaurant';
import Register from '../Register/Register';
import Navbar from '../Navbar';
import Desk from '../Displaypage/Desk';
import Login from '../Login/Login'
import Aboutus from '../Aboutus/Aboutsus';
import Footer from '../footer';
import Contactus from '../Contactus/Contactus'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Homepage1 from './Homepage1';
import Admin from '../Dashboard/Admins/Admin'
import Report from '../Dashboard/Admins/Report'
import Props from '../Dashboard/Admins/admprop'
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
<<<<<<< HEAD
     <Route path='/contactus'component={Contactus }/> 

=======
     <Route path='/education'component={Education}/> 
     <Route path='/restaurant'component={Restaurant}/> 
     <Route path='/desk'component={Desk}/> 
     <Route path='/admin' component={Admin}/>
     <Route path='/report' component={Report}/>
     <Route path='/props' component={Props}/>
    
>>>>>>> 6776c711a74ce0fe65b4c9210db03391905f6a4c
     </Switch>
    
    

      
    </BrowserRouter>
     
     <Footer/>
    
   </>
  );
}

export default Homepage;