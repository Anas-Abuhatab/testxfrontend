import React, { Component } from 'react';
import {
    Form, Button
} from 'react-bootstrap'

class UpdatedForm extends Component {


    render() {
        return (
            <div>
                <Form onSubmit={this.props.submit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="test" name="name" defaultValue={"decription"} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }
}

export default UpdatedForm
