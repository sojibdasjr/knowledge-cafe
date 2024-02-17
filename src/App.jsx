import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Booksmarks from "./components/BooksMarks/Booksmarks";
import Header from "./components/Header/Header";

function App() {
  const [booksmarks, setBooksmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  const handleAddToBooksmarks = (blog) => {
    const newBooksmarks = [...booksmarks, blog];
    setBooksmarks(newBooksmarks);
  };
  return (
    <>
      <Header />
      <main className="md:flex gap-6">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBooksmarks={handleAddToBooksmarks}
        />
        <Booksmarks readingTime={readingTime} booksmarks={booksmarks} />
      </main>
    </>
  );
}

export default App;
