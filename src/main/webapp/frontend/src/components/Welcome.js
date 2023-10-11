import React,{Component} from 'react';
import {Jumbotron} from "react-bootstrap";

class Welcome extends Component{
    render() {
        return(
            <Jumbotron className="bg-dark text-white">
                <h1>Hello! Welcome to our Book Shop!</h1>
                <blockquote className="blockquote mb-0">
                    <p>
                        <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous
                    </footer>
                </blockquote>
            </Jumbotron>
        );
    }
}

export default Welcome;