import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Bookmark/Bookmark';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [markBooks, setMarkBook] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog]
    setBookmark(newBookmark);
  };

  const handleMarkBook = (time, id) =>{
    const readingTime = markBooks + time;
    setMarkBook(readingTime);
    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmark(removeBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className="flex px-24 space-x-7">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkBook={handleMarkBook}
        ></Blogs>
        <Bookmark markBooks={markBooks} bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App
