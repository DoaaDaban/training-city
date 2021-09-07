import React from "react";
import {Card, Container, Row,Col} from 'react-bootstrap';

class Movie extends React.Component {

    render() {

        return (
            <>
            {/* <Container>
                <Row> */}
                {
                    this.props.showResult &&
                    this.props.movieArr.map(element => {
                        return (
                            <>
                            <Col lg={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={element.img} />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                           {element.overview}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                                </Col>
                            </>
                        )

                    })
                }
                {/* </Row>
                </Container> */}
            </>
        )
    }
}

export default Movie;