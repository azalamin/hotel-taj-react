import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HotelRoom = ({room}) => {
    const {name, price, img, description} = room;
    const navigate = useNavigate();
    return (
      <div className="col-12 col-md-6 col-lg-4 g-5">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>Price: ${price}</p>
            <Card.Text>{description}</Card.Text>
            <Button onClick={() => navigate('/checkout')} variant="primary">
              Checkout
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default HotelRoom;