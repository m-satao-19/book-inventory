import React from 'react';
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./redux/store";

import NavigationBar from './components/NavigationBar';
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";
import UserList from "./components/UserList";
function App() {

    const marginTop = {
        marginTop: '20px'
    };

  return (
    <BrowserRouter>
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path="/" exact component={Welcome} />
                        <Route path="/add" exact component={Book} />
                        <Route path="/edit/:id" exact component={Book} />
                        <Route path="/list" exact component={BookList} />
                        {/*<Route path="/users" exact component={UserList} />*/}
                        <Route path="/users" exact component={() =>
                            <Provider store={store}>
                                <UserList/>
                            </Provider>} />
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
