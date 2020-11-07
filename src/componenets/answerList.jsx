import React from 'react';
import Answer from './answer';

function AnswerList (props){
    const options = [];
    for (let i = 0; i < props.dataset.options.length; i++) {
       options.push(<Answer choice={i} click={props.click} answer={props.dataset.options[i]}/>)
        
    }
    return(

        <div>
           {options}
        </div>
    );
}

export default AnswerList;