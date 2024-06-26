import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import { FaClock, FaAsterisk, FaGlassCheers, FaProductHunt, FaTshirt, FaUtensils, FaWifi } from "react-icons/fa";


const HotelService = () => {
  return (
    <>
      <Container className="mb-2">
        <Header title={"Our Services"} />
        <Row className="mt-4">
          <h4 className="text-center">
            Services at <span className="hotel-color">fantastic-</span> Hotel
            <span className="gap-2">
              <FaClock /> - 24-Hour Front Desk
            </span>
          </h4>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi /> Wifi
                </Card.Title>
                <Card.Text>
                  Stay Connected with high-speed internet access.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils /> Breakfast
                </Card.Title>
                <Card.Text>
                  Start your day with a delicious breakfast buffet
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTshirt /> Laundry
                </Card.Title>
                <Card.Text>
                Luxurious Laundry Services Tailored to You
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaGlassCheers /> Mini-bar
                </Card.Title>
                <Card.Text>
                Enjoy a refreshing drink or snack from our in room mini-bar
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaProductHunt /> Parking
                </Card.Title>
                <Card.Text>
                Park your vehicle coveniently in our on-site parking lot
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaAsterisk/> Air conditioning
                </Card.Title>
                <Card.Text>
                 Stay cool and confortable with our air conditioning system
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default HotelService;
