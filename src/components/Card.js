// IMPORT: BOOTSTRAP ELEMENTS
import { Card, Row, Col, Button } from 'react-bootstrap';



// CARD FUNCTION MAIN ----------------------------------------------------
export default function ItemCard({itemProp}) {

  const { _id, image,  title, description, buttonText  } = itemProp;

  return (
    <Card className="m-5 shadow-sm bg-light border-secondary-subtle rounded-0">
     <Row>
       <Col xs={12} md={4}>
         <Card.Img className="rounded-0" variant="top" src={ image } />
       </Col>
       <Col xs={12} md={8} className="d-flex">
         <Card.Body className="my-auto">
           <Card.Title className="fs-2">{ title }</Card.Title>
           <Card.Text>
             { description }
           </Card.Text>
           <Button variant="danger" className="rounded-pill px-3">{ buttonText }</Button>
         </Card.Body>
       </Col>
     </Row>
    </Card>
  )
}