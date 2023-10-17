import axios from "axios";
import { useState } from "react";
import { backendURL } from "../constants";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post(backendURL, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("Error");
        console.log(err);
      });
  };

  return (
    <div className="p-6 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create book
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 mb-6">
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Book title"
            className="input input-bordered"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <input
            type="text"
            placeholder="Book author"
            className="input input-bordered"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">Publish Year</span>
          </label>
          <input
            type="text"
            placeholder="Publish Year"
            className="input input-bordered"
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button className="btn btn-success btn-block" onClick={createBook}>
          {loading ? (
            <>
              <span className="loading loading-spinner"></span>
              Creating book
            </>
          ) : (
            "create"
          )}
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
