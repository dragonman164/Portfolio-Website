import LoadingIndicator from '../LoadingIndicator';
import {useEffect,useState} from 'react';
import ParticleBg from '../ParticleBg';
import {Card} from 'react-bootstrap';

const DisplayData  = [
  {
 title:'Programming Languages',
  listdata: [
    {
      cardTitle: 'C',
      imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
      mainUrl: 'https://www.cprogramming.com/',

    },
    {
      cardTitle: 'C++',
      imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      mainUrl: 'https://www.w3schools.com/cpp/',

    },
    {
      cardTitle: 'Python',
      imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      mainUrl: 'https://www.python.org',

    },

  ],
},
  {
  title:'Mobile Application Development',
  listdata: [
    {
      cardTitle: 'Dart Programming Language',
      imageUrl:'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
      mainUrl: 'https://dart.dev',

    },
    {
      cardTitle: 'Flutter',
      imageUrl:'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
      mainUrl: 'https://flutter.dev',

    },
  ],
},
  {title: 'Web Development',
  listdata : [
      {
        cardTitle: 'HTML',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        mainUrl: 'https://www.w3.org/html/',
  
      },
      {
        cardTitle: 'CSS',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        mainUrl: 'https://www.w3schools.com/css/',
  
      },
      {
        cardTitle: 'JS',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        mainUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  
      },
      {
        cardTitle: 'Django',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg',
        mainUrl: 'https://www.djangoproject.com/',
  
      },
      {
        cardTitle: 'Bootstrap',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
        mainUrl: 'https://getbootstrap.com',
  
      },
      {
        cardTitle :'React',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        mainUrl:'https://reactjs.org/'
      }
  ],
},
  {title:'Cloud Services',
  listdata: [
    {
      cardTitle: 'Heroku',
      imageUrl:'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
      mainUrl: 'https://heroku.com',

    },
    {
      cardTitle: 'FireBase',
      imageUrl:'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      mainUrl: 'https://firebase.google.com/',

    },
    {
      cardTitle: 'Google Cloud Platform',
      imageUrl:'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
      mainUrl: 'https://cloud.google.com',

    },
  ],
},
{
 title:'Other Stuff',
  listdata: [
      {
        cardTitle: 'Git',
        imageUrl:'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
        mainUrl: 'https://git-scm.com/',
      },
      {
        cardTitle: 'Bash',
        imageUrl:'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
        mainUrl: 'https://www.gnu.org/software/bash/',
      },
      {
        cardTitle: 'Linux',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
        mainUrl: 'https://www.linux.org/',
      }
  ]
}
]

const HomePage = (props)=>{

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 500);  
  },[])

    return (

    
      loading?<LoadingIndicator/>:<>
       <div style={{
          height: '150px'
        }}>
        <ParticleBg/>
        </div>
     
    <div className={`position-relative overflow-hidden p-20 p-md-5 m-md-3 text-center bg-${props.bg} text-${props.text}`}>
    <div className="col-md-2 col-lg-10 p-lg-5 mx-auto my-1">
    <h4 className="text font-weight-bold">Welcome to the world of technical enthusiasts...</h4>
      <h1 className="font-weight-bold">Hey there, myself SANIDHIYA</h1>
      <p className="lead font-weight-bold">I am an undergraduate student pursuing B.Tech in Computer Science. I am also a Web Developer,App Developer and Cyber Security Enthusiast</p>
      <a className="btn btn-success btn-lg  text-light font-weight-bold" href="https://github.com/dragonman164"> 😄 Explore More</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

    <div className={`container bg-${props.bg} py-5 my-5 text-${props.text}`}>
    <h1 className="text-center font-weight-bold">Know my Techincal Skills</h1>
    <h4 className="text-center font-weight-bold">In my ongoing journey, I have mastered the following skills and I expect to learn more things  in the upcoming time.</h4>
    </div>  

        <div className={`container bg-${props.bg} py-5 my-5 text-${props.text}`}>

        {
          DisplayData.map((elem,index)=>{
            return (
              <>
              <h1 className="my-3 font-weight-bold">{index+1}. {elem.title}:</h1>
              <div className="mx-2 row">
    
              {
                elem.listdata.map((el)=>{
                  return (
                    <Card style={{ width: '12rem' }} bg={props.bg} className="border-0">
                    <Card.Body>
                    <a href={el.mainUrl}>
    <img src={el.imageUrl} alt='...' style={{
          width:'100px',
          height:'100px',
        }} className="mx-3"/>
        </a>
  </Card.Body>
          </Card>
                  )
                })
              }
              </div>

              </>
            )
          })
        }
  
      
        </div>
      

    </>
    )
} 
export default HomePage;