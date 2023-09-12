import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmark, handleMarkBook }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <div className="space-y-5 w-2/3 mt-7">
      {blogs.map((blog, inx) => (
        <Blog
          handleBookmark={handleBookmark}
          handleMarkBook={handleMarkBook}
          key={inx}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};


export default Blogs;