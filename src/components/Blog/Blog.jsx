import { PiBookmarkSimple } from "react-icons/pi";
const Blog = ({ blog, handleAddToBooksmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className=" mb-4 ">
      <img
        className="rounded-xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between my-4">
        <div className="flex">
          <img
            className="w-20 rounded-lg"
            src={author_img}
            alt={`Author picture of the author image ${author_img}`}
          />
          <div className="ml-6">
            <p className="text-2xl font-bold">{author}</p>
            <span className="opacity-50">{posted_date} (4 day ago)</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span>{reading_time} min read</span>
            <button onClick={() => handleAddToBooksmarks(blog)}>
              <PiBookmarkSimple className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold font-width my-4">{title}</h1>
      <h1 className="opacity-50 my-4">
        {hashtags.map((hash, index) => (
          <span key={index}>
            {" "}
            <a href="">{hash}</a>
          </span>
        ))}
      </h1>
      <button
        className="text-blue-600 font-bold underline"
        onClick={() => handleMarkAsRead(reading_time)}
      >
        Mark as read
      </button>
      <hr className=" my-4" />
    </div>
  );
};

export default Blog;
