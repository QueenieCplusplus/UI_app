// 2020, 7/29, PM2-6
// 'react-bootstrap'

import React, {Component} from 'react';
import {Container, Button, ProgressBar, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Bapp extends Component{

    constructor(props){
        super(props);
        this.state = {s: ""};
        this.textDoer = this.textDoer.bind(this);
        this.pastDoer = this.pastDoer.bind(this);
        this.defaultDoer = this.defaultDoer.bind(this);
    }

    textDoer(e){
        this.setState({s:e.target.value})

    }

    pastDoer(){
        this.setState(state => ({s:"good job"}))
        
    }

    defaultDoer(){
        this.setState(state => ({s:"a comment here"}))
        
    }


    componentDidMount(){
        // this.defaultDoer(addon=>this.setState({s: addon}))
        this.defaultDoer()
        
    }

    render(){
        return(

        <Container>

            <div>

            <p>Plz input your comment here</p>

            <input onChange = {this.textDoer}/>

            <button onClick = {this.pastDoer}> Default Comment </button>
            </div>

            <br/>

            <Button variant="Default Comment" size="lg" onClick = {this.pastDoer} disabled> Default Bootstrap Comment </Button>{' '}
 
            <p> Show Comment: </p> <p> {this.state.s} </p>

            <br/>
            <br/>

            <div>
                <ProgressBar animated = {true} now={60} variant="success"/>
            </div>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            

            {/* <Row in = {true}>
                <Col> apple </Col><Col> android </Col><Col> web </Col>
            </Row>
            <Row>
                <Col> swift </Col>
                <Col> java </Col>
                <Col> js </Col>
            </Row>
            <Row>
                <Col> cocoapod </Col>
                <Col> rxjava </Col>
                <Col> react </Col>
            </Row>
            <Row>
                <Col> 2018 </Col>
                <Col> 2019 </Col>
                <Col> 2020 </Col>
            </Row> */}

            <br/>

            <Link to="/reactnative">Home</Link>

            <br/>
            <br/>
        </Container>
        )}

}
export default Bapp;
