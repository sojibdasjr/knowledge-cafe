const Booksmarks = ({ booksmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <h2 className=" text-2xl bg-purple-100  border border-purple-700 text-center tracking-wide p-6  font-aril">
        Spent time on read : {readingTime} min
      </h2>
      <div className="my-4 bg-gray-200 pb-4 rounded ">
        <div className="">
          <h1 className="text-3xl py-4 my-4 ml-4">
            Bookmarked Blogs: {booksmarks.length}
          </h1>
          <div>
            {booksmarks.map((book, index) => (
              <h2 className="text-2xl p-4 m-4 bg-white rounded" key={index}>
                {book.title}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booksmarks;
