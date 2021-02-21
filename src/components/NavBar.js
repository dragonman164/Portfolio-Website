import {Link} from "react-router-dom";

const NavBar = ()=>{
    return (
        <>
        <Link to ="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
        </>
    )
} 
export default NavBar;