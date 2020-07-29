// 2020, 7/29

import React from 'react';
import {Component} from 'react';
import {Button, CircularProgress, Avatar, Icon} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Capp extends Component{

    render(){
        return(

            <div>
                <br/>

                <Avatar/> <p> Kates U-tube Channel </p>

            
                <iframe scrolling="yes" frameborder="1" title="usFrame" aria-hidden="true" width="658" height="370" src="https://www.youtube.com/embed/vy7LkrlJzmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                 </iframe>

                <br/>
                <br/>
                <blank/>
                <Button> Like </Button>
                <br/>
                <br/>
                <blank/>
                <Link to = "/reactnative"> Back </Link>
                <br/>
                <br/>
                <Link to = "/bootstrap"> Comment </Link>
                 <CircularProgress/>

            </div>

           
        
        )}
}

export default Capp;

                    