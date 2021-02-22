import {Link} from "react-router-dom";
import {Navbar,Nav,Button} from 'react-bootstrap';


const NavBar = ()=>{

    const NavbarStyle = {
        textDecoration : 'inherit',
        color : 'inherit',
        fontSize:20,
        fontWeight:'bold',
    
    }
  
    return (
    <>
   <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
   {/* <img alt=".." src={MyPhoto} style={NavbarLogo}/> */}
  <Navbar.Brand style={{fontWeight:'bold',fontSize:23}}>SANIDHIYA's SPACE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link h><Link to="/" style={NavbarStyle}>Home</Link></Nav.Link>
      <Nav.Link ><Link to="/about" style={NavbarStyle}>About</Link></Nav.Link>
      <Nav.Link><Link to="/project" style={NavbarStyle}>Projects</Link></Nav.Link>
      <Nav.Link ><Link to="/contact" style={NavbarStyle}>Contact</Link></Nav.Link>
     
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