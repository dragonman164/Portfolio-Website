import Particles from 'react-particles-js';


const ParticleBg = ()=>{
    return (
    
        <Particles
		className="bubbles"
    params={{
      "fps_limit": 100,
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
         
	    }
	}} /> 
     

    )
}


export default ParticleBg;