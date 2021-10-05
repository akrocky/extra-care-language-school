
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import ContactWithUs from './components/ContactWithUs/ContactWithUs';
import NotFound from './components/NotFound/NotFound';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div >
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
<Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>

         </Route>
         <Route exact path="/courses">
           <Courses></Courses>


         </Route>
         <Route exact path="/aboutus">
<AboutUs></AboutUs>
         </Route>
         <Route exact path="/contact">
           <ContactWithUs></ContactWithUs>

         </Route>
         <Route exact path="/courses/:id">
<CourseDetails></CourseDetails>
         </Route>
         <Route path="*">
<NotFound></NotFound>
         </Route>
        
       </Switch>
       <Footer></Footer>
     </Router>

    </div>
  );
}

export default App;
