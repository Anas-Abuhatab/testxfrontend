import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: []
        }
    }

    componentDidMount = async () => {
         axios.get(`${process.env.REACT_APP_BACK_HOST}/get`).then((res) => {
            this.setState({
                allData: res.data,
            });
        });
    };
    handleFav =async (title ,img) => {
        let config = await{
            method :'POST',
            url :`${process.env.REACT_APP_BACK_HOST}/fruPost`,
            data : {
                strDrink: title,
                strDrinkThumb: img,
                description: "description",
                email:this.props.auth0.user.email
            }
        }
        console.log(this.props.auth0.user.email)
        
      await axios(config).then(res=>{
        console.log(res.data)
      })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.allData.map(item => {

                        return (<Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${item.strDrinkThumb}`} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                                <Card.Text>
                                    Add to favourites to write description
                                </Card.Text>

                                <Button variant="primary" onClick={()=>this.handleFav(item.strDrink ,item.strDrinkThumb)}>Add to Favourites</Button>
                            </Card.Body>
                        </Card>
                        )
                    })}


                </div>

            </div>
        )
    }
}

export default withAuth0(HomePage)
