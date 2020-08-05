// 2020, 7/29 am9-Noon
// 'react-native-web'

import React, {Component} from 'react';
import './App.css';
import {Image} from 'react-native';
import {StyleSheet, View, Text, Button} from 'react-native-web';
// use 'react-native-web' instead of 'react-native'
import {Link} from 'react-router-dom';

class App extends Component {

  render(){

    return (

     
      <View style={kkk.container}>
        <header className= 'App-header'>
        <Text style={kkk.k_text}>
          Kates React UI !
        </Text>
        <div className ={kkk.center}>
          <p>hi!</p>

       </div>

        {/* <Image style={kkk.icon} source={require('../assets/product.png')}/> */}
        {/* Module not found: You attempted to import ../assets/product.png 
        which falls outside of the project src/ directory. 
        Relative imports outside of src/ are not supported. */}
  
        <a
          className="App-link"
          href="https://github.com/QueenieCplusplus/React_loginApp"
        >
          Queens Code for React
        </a>
        </header>

          <View style={kkk.iconsbackground}>

            <Image style={kkk.icon} source= {require('./mail.png')}/> 
            <Image style={kkk.icon} source= {require('./map.png')}/>
            <Image style={kkk.icon} source= {require('./fb.png')}/>
            <Image style={kkk.icon} source= {require('./twitter.png')}/>

          </View>
       
          <body>
           

            <br/>

            <Link to="/bootstrap">Comment</Link>
            <br/>
            <br/>

             <Link to="/coreui">Gallery</Link>

             <br/>
             <br/>

            <button>upload</button>
            <button>download</button>
            <button>share</button>
            <button>email</button>
          </body>

          <br/>

  
          <Button style = {kkk.touch}>click</Button>
  
  
        </View>  
      
    );
  }



  }



/*React.createElement(
  component,
  props,
  child
)*/

/*React.createElement(
  'a',
  {className: 'App-link'}
)*/

const kkk = StyleSheet.create({

  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#000000"


  },

  text:{
    color: '#FFF',
    fontsize: 100
  },
  
  touch:{
    padding: 30,
    marginBottom: 10
  },

  k_text:{
    color: "#61dafb",
    fontSize: 30,
    marginBottom: 10
  },

  iconsbackground:{

    
    

  },
  icon:{
    height: 70,
    weidth: 20,
    padding: 0,
    resizeMode: 'contain'
  },

  center: {
    padding: 20,
    border: 3,
    align: 'center'
  },

});

export default App;
