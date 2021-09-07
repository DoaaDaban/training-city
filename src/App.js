import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, ListGroup, Container ,Row} from 'react-bootstrap';
import Map from './components/Map';
import Movie from './components/Movie';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      lat: '',
      lon: '',
      showResult: false,
      displayErr: false,
      errorMsg: 'Bad RESpose',
      movieArr:[],
    }
  }

  getLocationInfo = (event) => {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&format=json`)
      .then(result => {
        this.setState({
          displayName: result.data[0].display_name,
          lat: result.data[0].lat,
          lon: result.data[0].lon,
          showResult: true,
        })
      })

      axios
      .get(`http://localhost:3008/movies?cityName=${cityName}`)
      .then(result => {
        this.setState({
          movieArr: result.data
        })
      })

      .catch(() => {
        this.setState({
          displayErr: true,

        })
      })
  }


  render() {

    return (
      <>
        <Form onSubmit={this.getLocationInfo}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter city Name" name='cityName' />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

        {
          this.state.showResult &&
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{this.state.displayName}</ListGroup.Item>
              <ListGroup.Item>{this.state.lat}</ListGroup.Item>
              <ListGroup.Item>{this.state.lon}</ListGroup.Item>
            </ListGroup>
          </Card>
        }

        <Map lat={this.state.lat} lon={this.state.lon} showResult={this.state.showResult} />


<Container>
  <Row>
  <Movie movieArr={this.state.movieArr} showResult={this.state.showResult}/>
  </Row>
</Container>
       

        {
          this.state.displayErr && this.state.errorMsg
        }

      </>
    )
  }
}

export default App;