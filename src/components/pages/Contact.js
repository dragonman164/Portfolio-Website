import {Form,Button,Alert} from 'react-bootstrap';
import {useEffect,useState} from 'react';
import LoadingIndicator from '../LoadingIndicator';
import ParticleBg from '../ParticleBg';

const ContactPage = (props)=>{


    const [loading,setLoading] = useState(true);


    useEffect(()=>{
      setTimeout(() => {
        setLoading(false);
      }, 500);  
      },[])

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')
    const [alert,setalert] = useState(false) 

    function triggerEmailChange (event)
    {
        setEmail(event.target.value)
    }

    function triggerNameChange (event)
    {
        setName(event.target.value)
    }
    function triggerMessageChange(event)
    {
        setMessage(event.target.value)
    
    }

    function submitForm(e)
    {
        e.preventDefault();
        console.log(email)
        console.log(name)
        console.log(message)
        setalert(true)
    }

    return (
        loading?<LoadingIndicator/>: <>
        <div style={{
          height: '150px'
        }}>
        <ParticleBg/>
        </div>

{alert?<Alert  variant="success" dismissible onClose={()=>setalert(false)}> 
    Form has been submitted Successfully
  </Alert>:null}
          <div className={`container py-5 my-5 text-center bg-${props.bg} text-${props.text}`}>
    <div className="col-md-2 col-lg-10 p-lg-5 mx-auto my-1">
      <h1 className="font-weight-bold ">Do you wanna Collaborate?</h1>
      <h3 className="lead font-weight-bold">You can write me Here!!</h3>
    </div>
    </div>

        <div className={`container bg-${props.bg} py-2 text-${props.text}`}>
    <Form  onSubmit={submitForm} id="form">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="h5">Email address: {email}</Form.Label>
    <Form.Control type="email" placeholder="abc@gmail.com" onChange={triggerEmailChange} value={email} required/>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="h5">Your Name: {name}</Form.Label>
    <Form.Control type="text" placeholder="John" onChange={triggerNameChange} value={name} required/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="h5">Your Message: </Form.Label>
    <Form.Control as="textarea" rows={3} onChange={triggerMessageChange} value={message}/>
  </Form.Group>
</Form>

<Button className="btn btn-primary" form="form" value="submit" type="submit" >Submit</Button>
</div>
        </>
    )
} 
export default ContactPage;