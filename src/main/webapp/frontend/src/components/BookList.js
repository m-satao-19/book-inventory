import React, {Component} from "react";
import {Table, Card, Image, Button} from "react-bootstrap";
import axios from 'axios';
import {Link} from "react-router-dom";
import MyToast from "./MyToast";

class BookList extends Component{

    constructor(props) {
        super(props);
        this.state={
            books:[]
        };
    }

    componentDidMount() {
        this.findAllBook();
    }

    // findAllBook(){
    //     axios.get("http://localhost:8080/books")
    //         .then(response => response.data)
    //         .then((data)=>{
    //             this.setState({books:data});
    //         });
    // }

    findAllBook(){
        fetch("http://localhost:8080/books")
            .then(response => response.json())
            .then((data)=>{
                this.setState({books:data});
            });
    }

    // deleteBook=(bookid)=>{
    //     axios.delete("http://localhost:8080/books/"+bookid)
    //         .then(response=> {
    //             if (response.data != null){
    //                 this.setState({"show": true});
    //                 setTimeout(()=>this.setState({"show": false}),3000);
    //                 this.setState({
    //                     books: this.state.books.filter(book=> book.id!==bookid)
    //                 });
    //             } else {
    //                 this.setState({"show": true});
    //             }
    //         })
    // }

    deleteBook=(bookid)=>{
        fetch("http://localhost:8080/books/"+bookid,{
            method:'DELETE'
            })
            .then(response=>response.json())
            .then(book=> {
                if (book){
                    this.setState({"show": true});
                    setTimeout(()=>this.setState({"show": false}),3000);
                    this.setState({
                        books: this.state.books.filter(book=> book.id!==bookid)
                    });
                } else {
                    this.setState({"show": true});
                }
            })
    }

    render() {
        return(
            <React.Fragment>
                <div style={{"display": this.state.show ? "block":"none"}}>
                    <MyToast show={this.state.show} message={"Book Deleted Successfully"} type={"danger"}/>
                </div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>Book List</Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Language</th>
                                <th>ISBN No.</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.books.length === 0 ?
                                <tr>
                                    <td colSpan={7} className="text-center">No Books Available Now</td>
                                </tr> :
                                this.state.books.map((book)=>(
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td><Image src={book.photourl} rounded-circle width="25" height="25" />{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.language}</td>
                                        <td>{book.isbnno}</td>
                                        <td>{book.price}</td>
                                        <td>
                                            <Link to={"edit/"+book.id} className="btn bg-primary text-white">Edit</Link>
                                            {'  '}
                                            <Button className="bg-danger outline-danger" onClick={this.deleteBook.bind(this,book.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))

                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default BookList;