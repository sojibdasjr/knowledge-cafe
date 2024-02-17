import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBooksmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 mb-4">
      <div>
        {blogs.map((blog) => (
          <Blog
            handleMarkAsRead={handleMarkAsRead}
            handleAddToBooksmarks={handleAddToBooksmarks}
            blog={blog}
            key={blog.id}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
