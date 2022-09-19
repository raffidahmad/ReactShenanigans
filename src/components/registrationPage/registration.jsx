import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import steamIcon from '../login page/assets/steam.svg'

function RegistrationForm(props) {

    const [formData, setFormData] = useState(
        {
            firstName: "",
            secondName: "",
            address: "",
            email: "",
            password: ""
        }
    )

    //console.log(formData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        //validate data +/ useEffect
        //IF VALID
        //send/submit to database
        fetch('https://localhost:44301/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: formData.firstName,
                LastName: formData.secondName,
                Email: formData.email,
                Password: formData.password
            })
        });
        alert("User registered.")
        //update pageChange state
        

    }
    return (
        <Container className='min-vw-100'>
        <Row className="justify-content-center align-items-center bg-primary py-5 min-vh-100">
        <Col className="col-xl-4 col-lg-4 col-md-7 ">
        
            <Form className='shadow-lg p-3 bg-body rounded-5' onSubmit={handleSubmit}>
              {/* LOGO Here */}
              <div className='text-center my-5'> <img src={steamIcon} alt={"steamic"} width="100px" /></div>
  
              <div className="rounded-3 " style={{backgroundColor:"lightgray"}}>
                <Row className="g-3 pb-3 px-3 mt-0">
                  <Col>
                    <Button  onClick={props.clicked} className="rounded-3 fw-bold w-100" variant="dark" >Login</Button>
                  </Col>
                  <Col>
                    <Button className="rounded-3 fw-bold w-100" variant="light" >Sign Up</Button>
                  </Col>
                </Row>
              </div>
  
  
              <div className="text-center h1 fw-bold mt-5">Create Account,</div>
              <div className="text-center h4 text-muted mb-5">Sign up to get started!</div>
                      
                            <Form.Group className="mb-3" controlId="FirstName">
                                <Form.Control required type="text" placeholder="First Name"
                                    onChange={handleChange}
                                    name='firstName'
                                    value={formData.firstName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="LastName">
                                <Form.Control required type="text" placeholder="Last Name"
                                    onChange={handleChange}
                                    name='secondName'
                                    value={formData.secondName} />
                            </Form.Group>
   
                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Control required type="email" placeholder="Enter email"
                                        onChange={handleChange}
                                        name='email'
                                        value={formData.email} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Password">
                                    <Form.Control required type="password" placeholder="Password"
                                        onChange={handleChange}
                                        name='password'
                                        value={formData.password} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Terms">
                                    <Form.Check required type="checkbox" label="Agree to the terms and conditions." />
                                </Form.Group>

                        <Button className="w-100 py-2 fw-bold rounded-4" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form >
                </Col>
            </Row>
            </Container>
    )
}

export default RegistrationForm