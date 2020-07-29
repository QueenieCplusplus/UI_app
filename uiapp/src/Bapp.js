// 2020, 7/29, PM2-6
// 'react-bootstrap'

import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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

            <p>Plz input your comment here</p>

            <input onChange = {this.textDoer}>
            </input>

            <button onClick = {this.pastDoer}> Default Comment </button>
 
            <p> Show Comment: </p> <p> {this.state.s} </p>

            <br/>
            <br/>

            <Row>
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
            </Row>

            <br/>

            <Link to="/reactnative">Home</Link>

            <br/>
            <br/>
        </Container>
        )}

}
export default Bapp;
