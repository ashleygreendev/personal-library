import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    book: [],
    id: 0,
    author: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getBook')
      .then((book) => book.json())
      .then((res) => this.setState({ book: res.book }));
  };

  putDataToDB = (title, author) => {
    let currentIds = this.state.book.map((book) => book.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putBook', {
      id: idToBeAdded,
      title: title,
      author: author
    });
  };

  render() {
    const { book } = this.state;
    return (
      <div>
        <ul>
          {book.length <= 0
            ? 'NO DB ENTRIES YET'
            : book.map((dat) => (
                <li style={{ padding: '10px' }} key={book.title}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> book: </span>
                  {dat.title}
                </li>
              ))}
        </ul>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>
      </div>
    );
  }

}

export default App;
