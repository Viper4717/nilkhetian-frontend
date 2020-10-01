import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';
import { UserContext } from '../../Contexts';
import history from '../../History';

function updateUser(userObject, user, setUser, setLoading, setError){
    Axios.post(`${serverUrl}/api/user/update`, userObject)
        .then((res) => {
            var storageUser = user;
            storageUser.phone = userObject.phone;
            storageUser.address = userObject.address;
            if(userObject.newPassword != null){
                storageUser.password = userObject.newPassword;
            }
            setUser(storageUser);
            localStorage.setItem("user", JSON.stringify(storageUser));
            setLoading(false);
            history.push('/profile');
        })
        .catch((error) => {
            setLoading(false);
            window.scrollTo(0, 0);
            const err = "Failed to update profile."
            setError(err);
        });
}

function validatePhone(phone){
    const re = /^(\+88)?(01[3-9]{1}\d{8}$)/
    return re.test(phone);
}

function EditProfile() {

    const [user, setUser] = useContext(UserContext);

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState();
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleNewPassword(e){
        setNewPass(e.target.value);
    }
    function handleConfirmPassword(e){
        setConfirmPass(e.target.value);
    }
    function handlePhone(e){
        setPhone(e.target.value);
    }
    function handleAddress(e){
        setAddress(e.target.value);
    }

    function update(e){
        e.preventDefault();
        if(password){
            setError(null);
            if(password != user.password){
                window.scrollTo(0, 0);
                const err = "Your current password is incorrect."
                setError(err);
            }
            else{
                if((newPass && newPass.length < 8) || !validatePhone(phone) || address.length < 10
                || (newPass && newPass !== confirmPass)){
                    window.scrollTo(0, 0);
                    const err = "Invalid data."
                    setError(err);
                }
                else{
                    if (newPass == null || newPass == ""){
                        newPass = null;
                    }
                    setError(null);
                    setLoading(true);
                    const userObject = {
                        password: password,
                        newPassword: newPass,
                        phone: phone,
                        address: address,
                    }
                    updateUser(userObject, user, setUser, setLoading, setError);
                }
            }
        }
        else{
            window.scrollTo(0, 0);
            const err = "Please enter your current password."
            setError(err);
        }
    }

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Edit Profile
            </h4>
            <div className="formDiv">
            <Form onSubmit={update}>
                <div>
                    {error &&
                    <Alert variant='danger'>
                        {error}
                    </Alert>}
                    <h5 className="personalInfoText">
                        Personal Info
                    </h5>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={handlePassword}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={handleNewPassword}/>
                            {(newPass && newPass.length < 8) &&
                            <Form.Text className="passwordWarnText">
                                Password must be minimum 8 characters long.
                            </Form.Text>}
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter password"
                            onChange={handleConfirmPassword}/>
                            {(confirmPass && password !== confirmPass) &&
                            <Form.Text className="passwordWarnText"> Passwords don't match! </Form.Text>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" defaultValue={user.address} onChange={handlePhone}/>
                            {(phone && !validatePhone(phone)) &&
                            <Form.Text className="passwordWarnText">
                                Enter a valid number.
                            </Form.Text>}
                        </Form.Group>
                </div>
                <div>
                    <div className="addressTextDiv">
                    <h5 className="personalInfoText">
                        Address Info
                    </h5>
                    <text className="accountText"> This will be set as your default shipping address </text>
                    </div>
                        <Form.Group>
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text" defaultValue={user.address} onChange={handleAddress} />
                            {(address && address.length < 10) &&
                            <Form.Text className="passwordWarnText">
                                Address must be minimum 10 characters long.
                            </Form.Text>}
                        </Form.Group>
                </div>
                <div className="signInButtonOverlay">
                    <Button className="signInButtonWeb" variant="custom" type="submit" disabled={loading}>
                        {loading? <Spinner animation="border" variant="dark"/> : "Update"}
                    </Button>
                </div>
                <div className="signInMobileOverlay">
                    <Button className="signInButtonMobile" variant="custom" type="submit" disabled={loading}>
                        {loading? <Spinner animation="border" variant="dark"/> : "Update"}
                    </Button>
                </div>
            </Form>
            </div>
        </Container>
    );
}

export default EditProfile;