import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BookList from "../components/BookList";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-5">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Book List
        </h3>
        <button
          className="btn btn-active btn-accent"
          onClick={() => navigate("/books/create")}
        >
          CREATE BOOK
        </button>
      </div>
      <div>{loading ? <Spinner /> : <BookList books={books} />}</div>
    </div>
  );
}

export default Home;
