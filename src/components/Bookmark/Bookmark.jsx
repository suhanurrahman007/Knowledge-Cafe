const Bookmark = ({ bookmarks, markBooks }) => {
  return (
    <div className="w-1/3 mt-7 space-y-5 bg-sky-300  rounded-lg p-6">
      <div className="bg-blue-400 py-5 text-center rounded-md">
        <h2 className="text-xl font-bold">
          Spent time on read : {markBooks} min
        </h2>
      </div>
      <h2 className="text-xl font-bold">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, inx) => (
        <p
          key={inx}
          className="p-3 bg-sky-200 text-justify font-semibold rounded-sm mb-3"
        >
          {bookmark.title}
        </p>
      ))}
    </div>
  );
};

export default Bookmark;
