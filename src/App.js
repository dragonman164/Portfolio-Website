import NavBar from './components/NavBar';
import {Switch,Route} from "react-router-dom";
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import ContactPage from './components/pages/Contact';
import ProjectPage from './components/pages/Project';
import ErrorPage from './components/pages/404';



function App() {
  return (
   <>
  <NavBar />
  <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/project" component={ProjectPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={ErrorPage}/>
    </Switch>
   </>
  );
}

export default App;
