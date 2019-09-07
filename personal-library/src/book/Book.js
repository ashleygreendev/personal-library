import React from 'react';
import ReactDOM from 'react-dom';

class BookComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { title: '', author: ''}
    }
    render(){
        return(
            <div>
                <div>
                    <h6>{this.state.title}</h6>
                    <h6>{this.state.author}</h6>
                </div>
            </div>
        );
    }
}

ReactDOM.render();