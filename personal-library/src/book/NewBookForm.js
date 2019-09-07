import React from 'react';
import ReactDOM from 'react-dom';

class NewBookForm extends React.Component {
    render(){
        return(
            <form>
                <input type="text">Title of the Book: </input>
                <input type="text">Author of the Book: </input>
            </form>
        );
    }
}

ReactDOM.render();