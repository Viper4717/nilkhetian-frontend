import React, { useState, useEffect, useContext } from 'react';
import './Login.css'
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { serverUrl } from '../../util';
import { UserContext } from '../../Contexts';
import history from '../../History';

function loginUser(user, setUser, setLoading, setError){
    Axios.post(`${serverUrl}/api/user/login`, user)
        .then(({data: res}) => {
            console.log("ashche")
            console.log(res);
            setUser(res);
            localStorage.setItem("user", JSON.stringify(res));
            history.push('/');
        })
        .catch((error) => {
            console.log('failed to login');
            setLoading(false);
            const err = "Login failed"
            setError(err);
        });
}

function Login() {

    const [user, setUser] = useContext(UserContext);

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(email && password){
            setError(null);
            const user = {
                email: email,
                password: password,
            }
            setLoading(true);
            loginUser(user, setUser, setLoading, setError);
        }
        else{
            const err = "E-mail/Password field is empty."
            setError(err);
        }
    }
    
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Sign In
            </h4>
            <div className="formDiv">
                {error &&
                <Alert variant='danger'>
                    {error}
                </Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={handlePassword}/>
                    </Form.Group>
                    <text className="accountText"> Don't have an account? </text>
                    <Link className="createAccount" to="/registration"> Create an account. </Link>
                    <div className="signInButtonnOverlay">
                        <Button className="signInButtonnWeb" variant="custom" type="submit">
                            {loading? <Spinner animation="border" variant="dark"/> : "Sign In"}
                        </Button>
                    </div>
                    <div className="signInMobileOverlay">
                        <Button className="signInButtonnMobile" variant="custom" type="submit">
                            {loading? <Spinner animation="border" variant="dark"/> : "Sign In"}
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default Login;
