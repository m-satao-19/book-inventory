import React, {Component} from "react";
import {Form, Card, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import MyToast from "./MyToast";

class Book extends Component{

    constructor(props) {
        super(props);
        this.state=this.initialState;
        this.state.show= false;
        this.bookChange=this.bookChange.bind(this);
        this.submitBook=this.submitBook.bind(this);
        this.updateBook=this.updateBook.bind(this)
    }

    initialState={
        id:'',
        title:'',
        author:'',
        photourl:'',
        isbnno:'',
        language:'',
        price:''
    }

    componentDidMount() {
        const bookId = this.props.match.params.id;
        if(bookId){
            this.findBoookbyId(bookId);
        }
    };

    // findBoookbyId=(bookId)=>{
    //     axios.get("http://localhost:8080/books/"+bookId)
    //         .then(response=> {
    //             if (response.data!=null){
    //                 this.setState({
    //                     id: response.data.id,
    //                     title: response.data.title,
    //                     author: response.data.author,
    //                     photourl: response.data.photourl,
    //                     isbnno: response.data.isbnno,
    //                     language: response.data.language,
    //                     price: response.data.price
    //                 });
    //             }
    //         }).catch((error)=>{
    //         console.error("Error  "+error);
    //     });
    // }

    findBoookbyId=(bookId)=>{
        fetch("http://localhost:8080/books/"+bookId)
            .then(response=>response.json())
            .then(book => {
                if (book){
                    this.setState({
                        id: book.id,
                        title: book.title,
                        author: book.author,
                        photourl:book.photourl,
                        isbnno: book.isbnno,
                        language: book.language,
                        price: book.price
                    });
                }
            }).catch((error)=>{
            console.error("Error  "+error);
        });
    }


    submitBook(event){
        //alert(this.state.title + this.state.author + this.state.language + this.state.price + "ISBNNO"+this.state.isbnno + this.state.photourl );
        event.preventDefault();

        const book = {
            title:this.state.title,
            author:this.state.author,
            photourl: this.state.photourl,
            isbnno:this.state.isbnno,
            language:this.state.language,
            price:this.state.price
        }

        // axios.post("http://localhost:8080/books", book)
        //     .then(response=> {
        //         if (response.data != null){
        //             this.setState({"show":true})
        //             setTimeout(()=>this.setState({"show":false}),3000);
        //             //alert("Book Saved Successfully ")
        //         } else {
        //             this.setState({"show":false})
        //         }
        //     });
        // this.setState(()=>this.initialState);

        fetch("http://localhost:8080/books", {
            method: 'POST',
            body: JSON.stringify(book),
            headers:{
                "Content-Type": "application/json"
            }
            })
            .then(response=> response.json())
            .then(book => {
                if (book){
                    this.setState({"show":true})
                    setTimeout(()=>this.setState({"show":false}),3000);
                    //alert("Book Saved Successfully ")
                } else {
                    this.setState({"show":false})
                }
            });
        this.setState(()=>this.initialState);
    };

    updateBook(event){
        //alert(this.state.title + this.state.author + this.state.language + this.state.price + "ISBNNO"+this.state.isbnno + this.state.photourl );
        event.preventDefault();

        const book = {
            id:this.state.id,
            title:this.state.title,
            author:this.state.author,
            photourl: this.state.photourl,
            isbnno:this.state.isbnno,
            language:this.state.language,
            price:this.state.price
        }

        // axios.put("http://localhost:8080/books", book)
        //     .then(response=> {
        //         if (response.data != null){
        //             this.setState({"show":true})
        //             setTimeout(()=>this.setState({"show":false}),3000);
        //             setTimeout(()=>this.booklist(),3000);
        //         } else {
        //             this.setState({"show":false})
        //         }
        //     });

        fetch("http://localhost:8080/books", {
            method: 'PUT',
            body: JSON.stringify(book),
            headers:{
                "Content-Type": "application/json"
            }
            })
            .then(response=>response.json())
            .then(book => {
                if (book){
                    this.setState({"show":true})
                    setTimeout(()=>this.setState({"show":false}),3000);
                    setTimeout(()=>this.booklist(),3000);
                } else {
                    this.setState({"show":false})
                }
            });
        this.setState(()=>this.initialState);
    };

    resetBook = ()=> {
        this.setState(()=>this.initialState)
    };

    bookChange(event){
        this.setState(
            {[event.target.name]: event.target.value}
        )
    };

    booklist = () => {
        return this.props.history.push("/list");
    };

    render() {

        const {title,author,photourl,isbnno,language,price}=this.state;

        return(
            <React.Fragment>
                <div style={{"display": this.state.show ? "block":"none"}}>
                    <MyToast show={this.state.show} message={"Book Saved Successfully"} type={"success"}/>
                </div>
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    {this.state.id ? "Update Book":"Add Book"}
                </Card.Header>
                <Form onSubmit={this.state.id ? this.updateBook : this.submitBook} onReset={this.resetBook} id="BookFormid">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} id="FormGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required autoComplete="off"
                                              className="bg-dark text-white"
                                              type="text"
                                              placeholder="Enter Book Title"
                                              name="title"
                                              value={title}
                                              onChange={this.bookChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} id="FormGridAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control required autoComplete="off"
                                              className="bg-dark text-white"
                                              type="text"
                                              placeholder="Enter Book Title"
                                              name="author"
                                              value={author}
                                              onChange={this.bookChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} id="FormGridPhotourl">
                                <Form.Label>CoverPhoto Url</Form.Label>
                                <Form.Control required autoComplete="off"
                                              className="bg-dark text-white"
                                              type="text"
                                              placeholder="Enter Book Title"
                                              name="photourl"
                                              value={photourl}
                                              onChange={this.bookChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} id="FormGridISNBno">
                                <Form.Label>ISBN No.</Form.Label>
                                <Form.Control required autoComplete="off"
                                              className="bg-dark text-white"
                                              type="text"
                                              placeholder="Enter Book Title"
                                              name="isbnno"
                                              value={isbnno}
                                              onChange={this.bookChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} id="FormGridLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control required autoComplete="off"
                                              className="bg-dark text-white"
                                              type="text"
                                              placeholder="Enter Book Title"
                                              name="language"
                                              value={language}
                                              onChange={this.bookChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} id="FormGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required autoComplete="off"
                                              className="bg-dark text-white"
                                              type="text"
                                              placeholder="Enter Book Title"
                                              name="price"
                                              value={price}
                                              onChange={this.bookChange}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button variant="success" type="submit">
                            {this.state.id ? "Update":"Submit"}
                        </Button>{'  '}
                        <Button variant="info" type="reset">
                            Reset
                        </Button>{'  '}
                        <Button variant="primary" type="button" onClick={this.booklist.bind()}>
                            BookList
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
            </React.Fragment>
        );
    }
}

export default Book;