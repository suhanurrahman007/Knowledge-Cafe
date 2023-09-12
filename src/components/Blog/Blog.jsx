import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkBook }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="">
      <div className="card bg-sky-950 text-white card-compact shadow-xl">
        <figure>
          <img className="w-full" src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex space-x-5 items-center">
              <img
                className="w-16 rounded-full border-none"
                src={author_img}
                alt=""
              />
              <div>
                <h2 className="text-lg font-bold">{author}</h2>
                <p className="text-sm text-gray-300">{posted_date}</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <h4 className="font-semibold text-md">{reading_time} min read</h4>
              <button onClick={() => handleBookmark(blog)} className="text-xl">
                <FaBookmark></FaBookmark>
              </button>
            </div>
          </div>
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-xs text-justify text-gray-400">
            Nothing have its upon and master, here he leave for his nevermore
            the tempest if and. That our shall oer it perched thee tapping on,
            store gaunt nevermore said he. Scarcely something heart maiden me
            the the ease tis.
          </p>
          <p>
            {hashtags.map((hash, inx) => (
              <span className="mr-5 hover:underline" key={inx}>
                <a href="">#{hash}</a>
              </span>
            ))}
          </p>
          <button
            onClick={() => handleMarkBook(reading_time, id)}
            className="btn btn-sm mt-5 bg-sky-600 hover:bg-sky-800 border-none text-white text-xs btn-block"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
