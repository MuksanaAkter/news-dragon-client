import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {

    // const { createUser } = useContext(AuthContext);
    // const [accepted, setAccepted] = useState(false);

    // const handleRegister = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const photo = form.photo.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     console.log(name, photo, email, password)
    //     createUser(email, password)
    //         .then(result => {
    //             const createdUser = result.user;
    //             console.log(createdUser);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    // const handleAccepted = event =>{
    //     setAccepted(event.target.checked)
    // }

       return (
        <div>
            
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
            <div>
                 <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                     <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                     <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
             </div>
        
            
        </div>
    );
};

export default RightNav;