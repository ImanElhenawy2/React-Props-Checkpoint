import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Player= ({name, team, nationality, age, jerseyNumber, imageUrl}) => {
    return (
     <Card className= "cards" style={{ width: '18rem' }}>
        <Card.Body>
           <Card.Title ><h1 className= "name">{name}</h1></Card.Title>
           <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '40vh' }} /> 
           <ListGroup className="list-group-flush ">
                <ListGroup.Item><h1 className= "team">{team}</h1></ListGroup.Item>
                <ListGroup.Item><h3 className= "team3"><img src={jerseyNumber} style={{ width: '27%', height: '10vh' }}/></h3></ListGroup.Item>
                <ListGroup.Item><h3 className= "team2">{nationality}</h3></ListGroup.Item>
                <ListGroup.Item><h3 className= "team2">{age}</h3></ListGroup.Item>
               
            </ListGroup>  
        </Card.Body>
         
     </Card>
    );
}


export default Player;