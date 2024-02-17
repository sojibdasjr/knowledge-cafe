import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Booksmarks from "./components/BooksMarks/Booksmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="md:flex gap-4">
        <Blogs />
        <Booksmarks />
      </main>
    </>
  );
}

export default App;
