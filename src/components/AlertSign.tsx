import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertSign() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="dark" className='m-0' onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Gain access to the free interactive stocks chart!</Alert.Heading>
            <p>
                In order to gain access, sign up or sign in to access the free practive tool! It's free!
            </p>
            <p className="mb-0">
                The link to the free stocks chart will not appear at the top of the screen unless you are signed in.
            </p>
            </Alert>
        );
    }
    return <Button variant='dark' onClick={() => setShow(true)}>How To Gain Access to Stocks Chart</Button>;
};





export default AlertSign;