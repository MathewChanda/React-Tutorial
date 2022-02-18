import React from 'react'; 
import "./Title.css"; 

function Title(props){
    return(
        <div> 
            <h1 id="mainTitleStyle">Score Application</h1>
            <h2 id="nameStyle">Made by {props.first} {props.last}</h2>
        </div>
    )
}


export default Title; 