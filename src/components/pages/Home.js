import SkillCard from '../SkillCard';
import LoadingIndicator from '../LoadingIndicator';
import {useEffect,useState} from 'react';



const DisplayData  = [
  {
 title:'Programming Languages',
  listdata: [
    {
      cardTitle: 'C',
      cardText:'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
      imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
      mainUrl: 'https://www.cprogramming.com/',

    },
    {
      cardTitle: 'C++',
      cardText:'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
      imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      mainUrl: 'https://www.w3schools.com/cpp/',

    },
    {
      cardTitle: 'Python',
      cardText:'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation.',
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
      cardText:'Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications. Dart is an object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile to either native code or JavaScript.',
      imageUrl:'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
      mainUrl: 'https://dart.dev',

    },
    {
      cardTitle: 'Flutter',
      cardText:'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename "Sky" and ran on the Android operating system.',
      imageUrl:'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
      mainUrl: 'https://flutter.dev',

    },
  ],
},
  {title: 'Web Development',
  listdata : [
      {
        cardTitle: 'HTML',
        cardText:'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        mainUrl: 'https://www.w3.org/html/',
  
      },
      {
        cardTitle: 'CSS',
        cardText:'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. ',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        mainUrl: 'https://www.w3schools.com/css/',
  
      },
      {
        cardTitle: 'JS',
        cardText:'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        mainUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  
      },
      {
        cardTitle: 'Django',
        cardText:'Django is a Python-based free and open-source web framework that follows the model-template-views architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit.',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg',
        mainUrl: 'https://www.djangoproject.com/',
  
      },
      {
        cardTitle: 'Bootstrap',
        cardText:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
        mainUrl: 'https://getbootstrap.com',
  
      }
  ],
},
  {title:'Cloud Services',
  listdata: [
    {
      cardTitle: 'Heroku',
      cardText:'Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go',
      imageUrl:'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
      mainUrl: 'https://heroku.com',

    },
    {
      cardTitle: 'FireBase',
      cardText:'Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011.',
      imageUrl:'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      mainUrl: 'https://firebase.google.com/',

    },
    {
      cardTitle: 'Google Cloud Platform',
      cardText:'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.',
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
        cardText:'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
        imageUrl:'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
        mainUrl: 'https://git-scm.com/',
      },
      {
        cardTitle: 'Bash',
        cardText:'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions. ',
        imageUrl:'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
        mainUrl: 'https://www.gnu.org/software/bash/',
      },
      {
        cardTitle: 'Linux',
        cardText:'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.',
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


      <div className={`container bg-${props.bg}`}>
      {
        DisplayData.map((data,index)=>{
          return (
            <>
            <div className="container py-1 my-3">
    <h2 className={`text-left font-weight-bold text-${props.text}`}>{index+1 +'.'} {data.title}</h2>
    </div>  
  <div className="container text-center">
       <div className="row ">
          {
            data.listdata.map((elem)=>{
              return(
                <SkillCard 
                imageUrl={elem.imageUrl} 
                cardTitle={elem.cardTitle} 
                cardText = {elem.cardText}
                mainUrl = {elem.mainUrl}
                />)
            }) 
          }
       </div>
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