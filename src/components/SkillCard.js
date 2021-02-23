import {Card,Button} from 'react-bootstrap';

const SkillCard = (props)=>{


    return(
    <Card className="mx-2 my-3 border border-dark " style={{ width: '18rem' }}>
  <Card.Img variant="top" className="container h-10 w-10 border border-dark bg-warning" src={props.imageUrl} />
  <Card.Body>
    <Card.Title>{props.cardTitle}</Card.Title>
    <Card.Text>
      {props.cardText}
    </Card.Text>
    <Button href={props.mainUrl} variant="btn btn-success">Learn More</Button>
  </Card.Body>
</Card>
    )
}

export default SkillCard;