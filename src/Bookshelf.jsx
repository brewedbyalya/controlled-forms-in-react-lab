import { useState } from 'react';

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: 'No Longer Human', author: 'Dazai Osamu' },
    { title: 'The Moon Over the Mountain: Stories', author: 'Atsushi Nakajima' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setBooks([...books, newBook]);
    
    setNewBook({
      title: '',
      author: ''
    });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={newBook.title} onChange={handleInputChange} required/>
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" value={newBook.author} onChange={handleInputChange} required />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <h3>My Bookshelf</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;