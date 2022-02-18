import React from 'react'; 

class Score extends React.Component{
    constructor(props){
        super(); 
        this.state = {
            score : 0 
        }
    }

    incrementScore = () => {
        this.setState({score : this.state.score + 1}); 
    }

    render(){
        return(
            <div>
                <h3>Score : {this.state.score}</h3>
                <button onClick={() => this.incrementScore()}>Increment</button>
            </div>
        )
    }
}

export default Score; 