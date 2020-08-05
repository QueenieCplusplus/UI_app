//2020, 8/05, am 9:35
// using react-spring

// 2020, 8/05 , am 9:30
// func component
import React, {useState} from 'react';

const Gapp = () => {

       return <Text />;

};

const Text = () => {

    const [text, setText] = useState(
        'Plz input word!'
    );
       
    const changeHandler = e => setText(e.target.value);
       
    return (
          <div>
            <h1>{text}</h1>
       
            <input type="text" value={text} onChange={changeHandler} />
          </div>
        );
 }

export default Gapp;
