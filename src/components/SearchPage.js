import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
const data = [
  {
    bookId: 1,
    title: "something",
    author: "ayush",
    genre: "horror",
    description: "horror drama",
    price: 350.0,
    availableForRent: true,
    availableForSale: true,
  },
  {
    bookId: 2,
    title: "something",
    author: "ayush",
    genre: "horror",
    description: "horror drama",
    price: 350.0,
    availableForRent: true,
    availableForSale: true,
  },
  {
    bookId: 3,
    title: "anything",
    author: "yash",
    genre: "comedy",
    description: "drama",
    price: 250.0,
    availableForRent: true,
    availableForSale: true,
  },
  {
    bookId: 3,
    title: "classmate",
    author: "isha",
    genre: "comedy",
    description: "drama",
    price: 250.0,
    availableForRent: true,
    availableForSale: true,
  },
];
function SearchPage() {
  const { title } = useParams();
  return (
    <div className="container mt-2">
      <h3 className="text-center">Searches related to - {title}</h3>
      <Row>
        {data.map((d) => (
          <Col md={4} key={d.id}>
            <Card className="m-2 text-center">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{d.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Author - {d.author}</ListGroup.Item>
                <ListGroup.Item>Genre - {d.genre}</ListGroup.Item>
                <ListGroup.Item>Price - ${d.price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                {d.availableForRent === true ? (
                  <Card.Link href="#">Rent</Card.Link>
                ) : null}

                {d.availableForSale === true ? (
                  <Card.Link href="#">Buy</Card.Link>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SearchPage;
