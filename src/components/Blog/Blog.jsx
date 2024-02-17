const Blog = ({ blog }) => {
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
        <div className="flex gap-5">
          <img
            className="w-20 rounded-lg"
            src={author_img}
            alt={`Author picture of the author image ${author_img}`}
          />
          <div>
            <p className="text-2xl font-bold">{author}</p>
            <p>{posted_date} (4 day ago)</p>
          </div>
        </div>
        <div>
          <h1>{reading_time} min read</h1>
        </div>
      </div>
      <h1 className="text-4xl font-bold font-width my-4">{title}</h1>
      <h1 className="opacity-50 my-4">{hashtags}</h1>
      <button>Mark as read</button>
      <hr className=" my-4" />
    </div>
  );
};

export default Blog;
