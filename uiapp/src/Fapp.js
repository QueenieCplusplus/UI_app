// 2020, 8/03, am 11:40
// to do zoom-in-out feature
// npm install react-stretchable
// using import Zoomable from 'react-stretchable';
// https://github.com/zsjjs/react-zoomable

import React, { Component } from "react";
import Zoomable from 'react-stretchable';

class Fapp extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        const testOption = {
          zoomable: {
            width: {
              min: 200,//default 10 拉伸最小宽度
              max: 300//default 1000 拉伸最大宽度
            },
            height: {
              min: 200,//default 10 拉伸最小高度
              max: 500//default 500 拉伸最大高度
            }
          },
          onZoomStart: (result) => {
            console.log("onZoomStart", result);
          },
          onZoomEnd: (result) => {
            console.log("onZoomEnd", result);
          },
          onZooming: (result) => {
            console.log("onZooming", result);
          }
        }
        return <Zoomable style={{background:"yellow"}} {...testOption}>
          <div className="test"> hi</div>
          <div className="test"></div>
        </Zoomable>

        // go draggable feature embeded with 'react-dragable'
      }
};

export default Fapp;