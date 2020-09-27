import React, { useState, useEffect, useContext } from 'react';
import './Login.css'
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { serverUrl } from '../../util';
import { UserContext } from '../../Contexts';
import history from '../../History';

function loginUser(user, setUser){
    Axios.post(`${serverUrl}/api/user/login`, user)
        .then(({data: res}) => {
            setUser(res);
            localStorage.setItem("user", JSON.stringify(res));
            history.push('/');
        })
        .catch((error) => {
            console.log('failed to login');
        });
}

function Login() {

    const [user, setUser] = useContext(UserContext);

    const [formEmpty, setFormEmpty] = useState(false);
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
            setFormEmpty(false);
            const user = {
                email: email,
                password: password,
            }
            loginUser(user, setUser);
        }
        else{
            setFormEmpty(true);
        }
    }
    
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Sign In
            </h4>
            <div className="formDiv">
                {formEmpty &&
                <Alert variant='danger'>
                    E-mail/Password field is empty.
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
                            Sign In
                        </Button>
                    </div>
                    <div className="signInMobileOverlay">
                        <Button className="signInButtonnMobile" variant="custom" type="submit">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default Login;
