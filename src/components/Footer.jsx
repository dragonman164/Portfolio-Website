import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import {Link}  from 'react-router-dom';
import {useState,useEffect} from 'react';

const Footer = ()=> {

    let object = new Date();
    let year = object.getFullYear().toString();
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
      var timerID = setInterval( () => setDateTime(new Date()), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
  

  


    return (
      <footer className="container-fluid bg-dark my-3  py-3 text-light" >
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted ml-5" style={{fontSize:'15px'}}>&copy; {year} All Rights Reserved</small>
        </div>
        <div className="col-6 col-md">
          <h4>Get in Touch</h4>
          <ul className="list-unstyled text-medium">
            <li className="py-1"><a className="text-light py-5" href="https://www.linkedin.com/in/sanidhiya-%E2%80%8E-86a427192/"><LinkedInIcon/>{'  '}LinkedIn</a></li>
            <li className="py-1"><a className="text-light" href="https://github.com/dragonman164"><GitHubIcon/>{'  '}GitHub</a></li>
            <li className="py-1"><MailIcon />{'  '}<a className="text-light" href="mailto:sanidhiyafirefox123@gmail.com">Gmail</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>WebPages</h5>
          <ul className="list-unstyled text-small">
            <li><Link to="/" className="text-light">Home</Link></li>
            <li><Link to="/about" className="text-light">About</Link></li>
            <li><Link to="/project" className="text-light">Projects</Link></li>
            <li><Link to="/contact" className="text-light">Contact</Link></li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h3>Current Date and Time:</h3>
          <h4>{dateTime.toLocaleString()}</h4>
        </div>
        </div>
      </footer>
    )
}
export default Footer;