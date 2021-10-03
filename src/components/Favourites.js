import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
    Card,
    Button,
    Modal
} from 'react-bootstrap';
import UpdatedForm from './UpdatedForm';
class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            showModal: false,
            id: '',
            strDrink: "",
            strDrinkThumb: ''
        };
    };

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_BACK_HOST}/fru`).then(res => {
            this.setState({
                favData: res.data
            })
        })
    }
    handleDelete = async (id) => {
        await axios.delete(`${process.env.REACT_APP_BACK_HOST}/fru/${id}`).then(res => {
            this.setState({
                favData: res.data
            });
        });
    };

    handleUpdate = async (id,strDrink,strDrinkThumb) => {
        this.setState({
            showModal: true,
            id: id,
            strDrink:strDrink ,
            strDrinkThumb:strDrinkThumb

        })
    }

    handleEdit = async (event) => {
        event.preventDefault();
        let config = await {
            method: "PUT",
            url: `${process.env.REACT_APP_BACK_HOST}/fruUpdata/${this.state.id}`,
            data: {
                strDrink:this.state.strDrink ,
                strDrinkThumb: this.state.strDrinkThumb,
                description: event.target.name.value
            }
        }
        await axios(config).then(res => {
            this.setState({
                favData: res.data,
                showModal: false
            });
        })
    }
    render() {

        return (
            <>
                {this.props.auth0.isLoading ? <h1>Loading</h1>
                    : <div className="row">
                        {this.state.favData.map(item => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`${item.strDrinkThumb}`} />
                                    <Card.Body>
                                        <Card.Title>{item.strDrink}</Card.Title>
                                        <Card.Text>
                                            <h6>{item.email}</h6>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { this.handleUpdate(item._id, item.strDrink, item.strDrinkThumb) }}>Edit</Button>
                                        <Button variant="primary" onClick={() => { this.handleDelete(item._id) }}>Delete</Button>
                                    </Card.Body>
                                </Card>

                            )
                        })}
                    </div>
                }



                <Modal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update the description</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UpdatedForm submit={this.handleEdit} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>





            </>
        )
    }
}

export default withAuth0(Favourites)
