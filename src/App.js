import NavBar from './components/NavBar';
import {Switch,Route} from "react-router-dom";
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import ContactPage from './components/pages/Contact';
import ProjectPage from './components/pages/Project';
import ErrorPage from './components/pages/404';
import Footer from './components/Footer';
import {useState} from 'react';


let bg = 'light',text='dark';
document.body.style = ' background: linear-gradient(to top right, #99ff66 0%, #66ffff 100%);';
document.title = 'SANIDHIYA\'s Space'
function App() {

  const [theme,setTheme] = useState('light');
  if(theme === 'dark')
  {
    bg = 'dark';
    text ='light'
  }
  else
  {
    bg = 'light';
    text = 'dark';
  }
  
  return (
   <>
  <NavBar changeTheme={setTheme}/>
  <Switch>
        <Route exact path="/" component={()=><HomePage text={text} bg={bg}/>}/>
        <Route path="/about" component={()=><AboutPage text={text} bg={bg}/>}/>
        <Route path="/project" component={()=><ProjectPage text={text} bg={bg}/>}/>
        <Route path="/contact" component={()=><ContactPage text={text} bg={bg}/>}/>
        <Route component={ErrorPage}/>
    </Switch>
 <Footer text={text} bg={bg}/>
   </>
   
  );
}

export default App;
