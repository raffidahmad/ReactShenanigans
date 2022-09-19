import './styles/loginPage.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import steamIcon from './assets/steam.svg'

function LoginForm(props) {
  const [formData, setFormData] = useState(
    {
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
    //validate data + authenticate / useEffect
    const options = {
      method: 'GET',
      // headers: {
      //     
      // }
    };

    async function checkUserAcc() {
      let obj;
      const res = await fetch('api/user', options)
      obj = await res.json();
      console.log(obj[0])
      if (formData.email === obj[0].email && formData.password === obj[0].password) {
        alert(`Yuppy`)
        //update pageChange state
        { props.changePage(prevAuthent => !prevAuthent) }
      }
      else {
        //dont submit
        alert('nope')
      }
    }

    checkUserAcc();
  }
  return (
<Container className='min-vw-100'>
    <Row className="justify-content-center align-items-center bg-warning py-5 min-vh-100">
      <Col className="col-xl-4 col-lg-4 col-md-6 px-3">
        <Form className='shadow-lg p-3  bg-body rounded-5' onSubmit={handleSubmit}>

          {/* LOGO Here */}
          <div className='text-center my-5'> <img src={steamIcon} alt={"steamic"} width="100px" /></div>

          {/*  */}
          <div className="rounded-3 " style={{ backgroundColor: "lightgray" }}>
            <Row className="g-3 pb-3 px-3 mt-0">
              <Col>
                <Button className="rounded-3 fw-bold w-100" variant="dark" >Login</Button>
              </Col>
              <Col>
                <Button onClick={props.clicked} className="rounded-3 fw-bold w-100" variant="light" >Sign Up</Button>
              </Col>
            </Row>
          </div>

          {/*  */}
          <div className="text-center h1 fw-bold mt-5">Welcome,</div>
          <div className="text-center h4 text-muted mb-5">Sign in to continue!</div>

          {/*  */}
          <Form.Group className="mb-3 " controlId="loginEmail">
            <Form.Control type="email" placeholder="Enter email"
              onChange={handleChange}
              name='email'
              value={formData.email}
               />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Control type="password" placeholder="Password"
              onChange={handleChange}
              name='password'
              value={formData.password} />
          </Form.Group>

          <Button className="w-100 py-2 fw-bold rounded-4" variant="warning" type="submit">
            Submit
          </Button>

          {/*  */}
        </Form >
        <div className="text-center">
          <a href="/" className="text-decoration-none me-3 link-dark">Privacy policy</a>
          <a href="/" className="text-decoration-none me-3 link-dark">Terms of use</a>
        </div>
      </Col>
    </Row>
    </Container>
  )
}

export default LoginForm;
