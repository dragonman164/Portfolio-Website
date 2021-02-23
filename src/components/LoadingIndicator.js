import {Spinner} from 'react-bootstrap';

const LoadingIndicator = ()=>{
    return (
        <div className="container-fluid text-center justify-content-center py-5" style={{
            height:'600px'
    
        }}>
             <Spinner animation="border"  style={{
                 top:'50%'
                
                 }} variant="success" />
        </div>
     
       
    )
}

export default LoadingIndicator;