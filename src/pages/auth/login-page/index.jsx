import { Form, Button, Row, Col } from "react-bootstrap";
import useApi from "./../../../hooks/useApi";
import { useEffect } from "react";

const LoginPage = () => {
  const api = useApi();

  useEffect(() => {
    (async () => {
      const postData = {
        email: "user@user.com",
        password: "user123",
      };
      const response = await api.post("/register", postData);
      console.log(response);
    })();
  }, []);
  return (
    <>
      <Row className="justify-content-center">
        <Col sm="12" md="12" lg="6">
          <Form>
            <Form.Group className="mb-3" controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*******" />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="loginForm.button">
              <Button variant="primary" className="w-100 mt-5">
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
