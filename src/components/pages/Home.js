import SkillCard from '../SkillCard';


const DisplayData  = {
  programmingLanguages : [
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
  mobileApplicationDevelopment: [
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
   

  ]
}

const HomePage = ()=>{

    return (
    <>
   <div className="position-relative overflow-hidden p-20 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-2 col-lg-10 p-lg-5 mx-auto my-1">
    <h4 className="text-">Welcome to the world of technical enthusiasts...</h4>
      <h1 className="fw-normal ">Hey there, myself SANIDHIYA</h1>
      <p className="lead fw-normal">I am an undergraduate student pursuing B.Tech in Computer Science. I am also a Web Developer,App Developer and Cyber Security Enthusiast</p>
      <a className="btn btn-outline-success" href="#">Explore More</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

    <div className="container bg-light py-5 my-5">
    <h1 className="text-center">Know my Techincal Skills</h1>
    <h4 className="text-center">In my ongoing journey, I have mastered the following skills and I expect to learn more things  in the upcoming time.</h4>
    </div>  

    <div className="container py-1 my-3">
    <h3 className="text-left">1. Programming Languages</h3>
    
    </div>  
  
  <div className="container text-center">
       <div className="row ">
          {
            DisplayData.programmingLanguages.map((elem)=>{
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
   
    <div className="container py-1 my-3">
    <h3 className="text-left">2. Mobile Application Development</h3>
    
    </div>  
  
  <div className="container text-center">

    <div className="row ">
           { DisplayData.mobileApplicationDevelopment.map((elem)=>{
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


    <div className="container py-1 my-3">
    <h3 className="text-left">3. Web Development</h3>
    
    </div>  
  
  <div className="container text-center">
       <div className="row ">
           <SkillCard/>
           <SkillCard/>
           <SkillCard/>
           
       </div>
        
        
    </div>
    <div className="container py-1 my-3">
    <h3 className="text-left">4. Cloud Services</h3>
    
    </div>  
  
  <div className="container text-center">
       <div className="row ">
           <SkillCard/>
           <SkillCard/>
           <SkillCard/>
           
       </div>
        
        
    </div>
    <div className="container py-1 my-3">
    <h3 className="text-left">5. Other Techincal Topics</h3>
    
    </div>  
  
  <div className="container text-center">
       <div className="row ">
           <SkillCard/>
           <SkillCard/>
           <SkillCard/>
           
       </div>
        
        
    </div>
    </>
    )
} 
export default HomePage;