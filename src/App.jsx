import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Bookmark/Bookmark';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmark] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog]
    setBookmark(newBookmark);
  };

  return (
    <>
      <Header></Header>
      <div className="flex px-24 space-x-7">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App
