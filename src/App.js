import './App.scss';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';






function App() {
  return (
    
    <div className="m-4 p-b-4">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">IH FORM</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>

<Form >

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="BAHRAIN" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="PLACE" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Yeet" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Manama</option>
        <option>Muharraq</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formBasicRange">
    <Form.Label>Range</Form.Label>
    <Form.Control type="range" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>


</Form>
<div class="p-4">
<footer class="bg-light text-center text-lg-start">

  <div class="text-center p-3">
    © 2021 Copyright:
    <a class="text-dark text-decoration-none " href="https://Isahaji.com/"  > isahaji.com</a>
  </div>

</footer>
    </div>
    </div>
  );
}

export default App;
