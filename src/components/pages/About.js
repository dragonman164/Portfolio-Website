import Table from '../Table';
import Slider from '../Slider';
import DescriptionIcon from '@material-ui/icons/Description';
import LoadingIndicator from '../LoadingIndicator';
import {useEffect,useState} from 'react';

const AboutPage = ()=>{

    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        setLoading(false)    
      },[])


    return (
         loading?<LoadingIndicator/>:<>
        <div className="container bg-dark py-5 my-5 text-center text-light">
    <div className="col-md-2 col-lg-10 p-lg-5 mx-auto my-1">
      <h1 className="font-weight-bold ">About Myself</h1>
      <h3 className="lead font-weight-bold">Explore My Journey and Learn more Things....</h3>
      <a className="btn btn-lg btn-outline-primary my-3  font-weight-bold" href="https://drive.google.com/file/d/19hlTd7fmU6laevqWtqpnxSzwIPYN02pI/view?usp=sharing"><DescriptionIcon/>{'  '}Check out my Resume Here</a>
    </div>
    </div>


    <div className="container bg-dark py-5 my-5 text-light">
        <h3 className="font-weight-bold text-left">1. Current Education</h3>
        <Table/>

        <h3 className="font-weight-bold text-left py-2">2. Professional Training</h3>
        <h5 className="col-6 font-weight-bold" >Online Courses</h5>
        <ol>
            <li className="h6 font-weight-medium--dark"><a className="text-light" href="https://www.youracclaim.com/badges/c0785f97-5eca-4551-bbbb-eb4b273c77de?source=linked_in_profile">Open Source Software Development, Linux and Git Specialization</a></li>
            <li className="h6 font-weight-medium--dark"><a className="text-light" href="https://www.coursera.org/account/accomplishments/verify/6DJJ5SZHV7S4?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Data Structures and Algorithms</a></li>
            <li className="h6 font-weight-medium--dark"><a className="text-light" href="https://www.coursera.org/account/accomplishments/verify/LBVRF6F5WRTJ?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Algorithmic ToolBox</a></li>
        </ol>


        <h5 className="col-6 font-weight-bold" >Professional Training</h5>
        <ol>
            <li className="h6 font-weight-medium--dark"><a className="text-light" href="https://drive.google.com/file/d/1r5oCikyin8oeqKRr3U9cJCtw24snOP_v/view">30 Days of Google Cloud program (Issued by Google)</a></li>
            <li className="h6 font-weight-medium--dark"><a className="text-light" href="https://drive.google.com/file/d/1CzHrFR07YPXremDYsUsB_D5NVYsLqqbP/view">Advent of Cyber 2020 (Issued By THM)</a></li>
        </ol>


        <h3 className="font-weight-bold text-left py-2">3. Learn More about my Past</h3>
        <Slider/>
    </div>
        </>
    )
} 
export default AboutPage;