import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

const Splash = () => {
    return (
        <Container>
            <h1>React Challenges</h1>
            <hr />
            <p>These challenges are meant to stretch and push your React skills. Remember to reference your existing code from other React apps, and research thing you are not sure of. This project is also set up with Reactstrap, which as you might guess is Bootstrap for React! Try to push yourself by bringing in some UI components from Reactstrap! Good luck and happy hacking!</p>
            <h4>Useful Resources</h4>
            <ListGroup>
                <ListGroupItem>
                    <a target="_blank" className="list-link" href="https://reactstrap.github.io/">Reactstrap Docs</a>
                </ListGroupItem>
                <ListGroupItem>
                    <a target="_blank" className="list-link" href="https://reactjs.org/docs/hooks-intro.html">React Hooks Docs</a>
                </ListGroupItem>
            </ListGroup>
        </Container>
    );
};

export default Splash;