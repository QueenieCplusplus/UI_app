// 2020, 8/03, am 9:40
// usig only w3 css style to modify its outlay


import React, {Component} from 'react';


class Eapp extends Component {

    render(){

        return(
            <div>
                <div class="w3-container w3-teal">
                    <h1>My Trip Blog</h1>
                </div>

                <br/>
                <div class="w3-card-2">
                    <img class="w3-sepia-min w3-circle w3-hover-opacity" style={{width:"10%"}} src="https://www.w3schools.com/w3css/img_avatar3.png" alt="avatar"/>
                    <br/>
                    <h5>Trip Advisor: Eric Chuang</h5>
                    <blank/>
                </div>
                <br/>

                <div class="w3-card">

                     <img src="https://www.w3schools.com/w3css/img_lights.jpg" style={{width:"40%"}} alt="hi a picture here"/>
                    <br/>
                    <br></br>
                </div>
              {/* <Image source={require('../assets/poupou.png')}/> */}


                <div class="w3-container">
                    <p>What a splendid view in Canada! </p>
                </div>

                <div class="w3-container w3-teal">
                    <p>copywrite @KatesTrip 2020</p>
                </div>

            </div>
        )

    }

}

export default Eapp;