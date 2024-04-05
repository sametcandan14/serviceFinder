import { Form, Button, Row, Col } from "react-bootstrap";
import { auth } from "../../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    (async () => {
      const email = "user@user.com";
      const password = "user123";
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential.user.accessToken);
        }
      );
    })();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    //Map Class
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    console.log(e);
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col sm="12" md="12" lg="6">
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="*******"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="loginForm.button">
              <Button type="submit" variant="primary" className="w-100 mt-5">
                <i className="fa-solid fa-right-to-bracket" /> &nbsp; Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
