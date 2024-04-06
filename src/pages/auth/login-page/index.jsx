import { Form, Button, Row, Col } from "react-bootstrap";
import { auth } from "../../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    //Map Class
    const data = new FormData(e.target);
    const formJson = Object.fromEntries(data.entries());

    console.log(formJson);

    // const loginResult = await signInWithEmailAndPassword(auth, formJson).then(
    //   (userCredential) => {
    //     console.log(userCredential.user.accessToken);
    //   }
    // );
    // err.code === "auth/invalid-credential"
    // dispatch(setToken(res.user?.accessToken)))
    //       dispatch(setUser(res.user))
    const loginResult = signInWithEmailAndPassword(
      auth,
      formJson.email,
      formJson.password
    );
    console.log(loginResult);
    loginResult.then((res) => dispatch(setToken(res.user.accessToken)));
    loginResult.then((res) => dispatch(setUser(res.user)));
    loginResult.catch((err) => alert("Bilgilerinizi kontrol ediniz"));
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
