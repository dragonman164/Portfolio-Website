import GitHubIcon from '@material-ui/icons/GitHub';
import {Button} from 'react-bootstrap'
import LoadingIndicator from '../LoadingIndicator';
import {useEffect,useState} from 'react';


const ProjectData = [

    {
        title: 'Swasthya Saathi Mobile Application',
        description:'It is a mobile application that is designed to register a patient and monitor the patient’s health in real-time using parameters such as heart-beat, blood pressure, and temperature. These parameters are fetched from servers and displayed in the mobile application.',
        link: 'https://github.com/dragonman164/Swasthya-Saathi-App',
    },
    {
        title: 'Covid Vijay Mobile Application',
        description:'It is a system designed to properly hold vaccination events across all major cities of the country. It uses Face Recognition to uniquely identify citizens and prioritizes them as per the rules of Govt. This system also manages the logistics of vaccines.',
        link: 'https://docs.google.com/presentation/d/1O1NFlsVOpg1JFbqnnsI7XQZaagKpbhMymivX2duQEok/edit#slide=id.p1',
    },
    {
        title: 'Algorithm Book',
        description:'Algo Book is a web app that provides codes for Data Structures and Algorithms in all major languages such as Python, C++ which are frequently asked in coding interviews.',
        link: 'https://github.com/dragonman164/Algorithm-Book',
    }
]



const ProjectsPage = (props)=>{

    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
          }, 500);  
        
      },[])


    return (
        loading?<LoadingIndicator/>:<>
        <div className={`container bg-${props.bg} py-5 my-5 text-center text-${props.text}`}>
    <div className="col-md-2 col-lg-10 p-lg-5 mx-auto my-1">
      <h1 className="font-weight-bold ">Projects</h1>
      <h3 className="lead font-weight-bold">Have a look at projects done by me.</h3>
      <a className="btn btn-lg btn-outline-warning my-3  font-weight-bold" href="https://github.com/dragonman164"><GitHubIcon />{'  '}Check out my Github Here</a>
    </div>
    </div>


    <div className={`container bg-${props.bg} py-5 my-5 text-${props.text}`}>

    {
        ProjectData.map((data,index)=>{
            return (
                <>
                <div className={`border border-${props.text} my-2 py-3 px-3`}>
                <h2 className="font-weight-bold py-3" >{index+1 +'.'} {data.title}</h2>
                  <p className="text-left h5 py-3">{data.description}</p>
                <Button href={data.link} className="y-6" variant="primary" size="lg" active>
                    Have a Look
                </Button>   
                </div>      
                         </>
            )
        })
   
    }
    </div>
    
        </>
    )
} 
export default ProjectsPage;