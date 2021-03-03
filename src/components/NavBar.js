import {Link} from "react-router-dom";
import {Navbar,Nav,Button} from 'react-bootstrap';
import {useState} from 'react';
let text = 'dark',bg = 'light';


const NavBar = (props)=>{

  const [theme,setTheme] = useState('light')
  

    const NavbarStyle = {
        textDecoration : 'inherit',
        color : 'inherit',
        fontSize:20,
        fontWeight:'bold',
    
    }
    function ChangeTheme (){

     
      if(theme === 'dark')
      {
      
        text = 'dark';
        bg = 'light';
        props.changeTheme('light');
        setTheme('light');
      }
      else
      {
        text = 'light';
        bg = 'dark';
        props.changeTheme('dark')
        setTheme('dark');
      }
      
      
    }
  
    return (
    <>
   <Navbar className="fixed-top" collapseOnSelect expand="lg" bg={bg} variant={bg}>
  <Navbar.Brand style={{fontWeight:'bold',fontSize:23}}>SANIDHIYA's SPACE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link h><Link to="/" style={NavbarStyle}>Home</Link></Nav.Link>
      <Nav.Link ><Link to="/about" style={NavbarStyle}>About</Link></Nav.Link>
      <Nav.Link><Link to="/project" style={NavbarStyle}>Projects</Link></Nav.Link>
      <Nav.Link ><Link to="/contact" style={NavbarStyle}>Contact</Link></Nav.Link>
      <label className="switch center mx-3">
  <input type="checkbox" onClick={ChangeTheme}/>
  <span className="slider round"></span>
</label>
<h4 className={`text-${text} center font-weight-bold`}>Theme(Dark/Light)</h4>
    </Nav>
    
    <Nav>
<Button className="btn btn-dark btn-lg" href="https://medium.com/@sanidhiyafirefox123" style={{fontWeight:'bold'}} variant="secondary" size="lg" active>
    Blogs on Medium</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
} 
export default NavBar;