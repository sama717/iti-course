import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './cards.css'

function BasicExample() {
  return (
    <div className="section-2 container center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height: '200px', objectFit: 'cover'}} className='p-2'/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark">LEARN MORE</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height: '200px', objectFit: 'cover'}} className='p-2'/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark">LEARN MORE</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height: '200px', objectFit: 'cover'}} className='p-2'/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark">LEARN MORE</Button>
          </Card.Body>
        </Card>
    </div>
    );
}

export default BasicExample;