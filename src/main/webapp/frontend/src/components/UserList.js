import React, {Component} from "react";
import MyToast from "./MyToast";
import {connect} from "react-redux";
import {fetchUsers} from '../redux/user/UserActions'
import {Button, Card, Image, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const mapStateToProps = state => {
    //console.log("here  "+state.user.users)
    return{
        userData: state.user.users
    }
};

const mapDispatchToProps = dispatch =>( {
    fetchUsers: ()=>{dispatch(fetchUsers())}
});

class UserList extends Component{
    constructor(props) {
        super(props);
        this.state={
            show:false
        };
    }

    componentDidMount() {
        //this.findAllUsers();
        this.props.fetchUsers();
    }

    findAllUsers = () => {
         fetch("http://localhost:8080/users")
             .then(response=>response.json())
             .then((data)=>{
                 this.setState({
                     users:data
                 });
             });
     };

    deleteUser = (uid) => {
        fetch("http://localhost:8080/users/"+uid, {
            method: 'DELETE'
        })
            .then(response=>response.json())
            .then(user=>{
                if (user){
                    this.setState({"show": true});
                    setTimeout(()=>this.setState({"show": false}),3000);
                    this.setState({
                        users: this.props.userData.filter(user => user.id!==uid)
                    });
                } else {
                    this.setState({"show": true});
                }
            })
    }

    render() {
         //const users = this.props.userData;
         //console.log("data "+this.props.userData);
         //const users = this.props.userData.users;
        return(
            <React.Fragment>
                <div style={{"display": this.state.show ? "block":"none"}}>
                    <MyToast show={this.state.show} message={"User Deleted Successfully"} type={"danger"}/>
                </div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>User List</Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.userData.length === 0 ?
                                <tr>
                                    <td colSpan={7} className="text-center">No User Registered Now</td>
                                </tr> :
                                this.props.userData.map((u)=>(
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td><Image src={u.photourl} rounded-circle width="25" height="25" />{u.firstname} {" "} {u.lastname}</td>
                                        <td>{u.contact}</td>
                                        <td>{u.email}</td>
                                        <td>{u.balance}</td>
                                        <td>
                                            <Link to={"/"} className="btn bg-primary text-white">Edit</Link>
                                            {'  '}
                                            <Button className="bg-danger outline-danger" onClick={this.deleteUser.bind(this,u.id)}>Delete</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);