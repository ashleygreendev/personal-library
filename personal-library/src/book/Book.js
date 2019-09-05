import React from 'react';
import ReactDOM from 'react-dom';

class BookComponent extends React.Component {
    render(){
        return(
            // title, author, read boolean, book cover image
            <div>
                <img></img>
                <div>
                    <h6>title</h6>
                    <h6>author</h6>
                    {/* read or not boolean */}
                </div>
            </div>
        );
    }
}

ReactDOM.render();