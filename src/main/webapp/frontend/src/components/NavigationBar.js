import React,{Component} from 'react';
import {Navbar, Nav, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar extends Component{

    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">
                    <img src="../img/logo.jpg" height="30" width="40" alt='BookShop' />
                </Link>
                <Nav className="mr-auto">
                    <Link to="add" className="nav-link">Add Book</Link>
                    <Link to="list" className="nav-link">Book List</Link>
                    <Link to="users" className="nav-link">User List</Link>
                </Nav>
            </Navbar>
        );
    }

}

export default NavigationBar;