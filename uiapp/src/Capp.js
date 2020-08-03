// 2020, 7/29
/*eslint eqeqeq:0*/

import React from 'react';
import {Component} from 'react';
import {Button as BT, CircularProgress as CP, Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Capp_theme';

class Capp extends Component{

    render(){ 
        
        return(

            <ThemeProvider theme={theme}>

                <CssBaseline />

                <div className="appappapp" >
                    <br/>

                    <Avatar/> 

        
                    
                    <iframe scrolling="yes" frameborder="1" title="usFrame" aria-hidden="true" width="658" height="370" src="https://www.youtube.com/embed/vy7LkrlJzmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> 

                    <br/>
                    <br/>
                    <blank/>
                    <BT> Like </BT>
                    <br/>
                    <br/>
                    <blank/>
                    <Link to = "/reactnative"> Back </Link>
                    <br/>
                    <br/>
                    <Link to = "/bootstrap"> Comment </Link>
                    <CP/>


                    <Container maxWidth="sm">
                    <Box my={2}>
                        {'hi this is my yourtube world...'}
    
                    </Box>
                    </Container>
            
                </div>

            </ThemeProvider>

           
        
        )}
}

export default Capp;

                    