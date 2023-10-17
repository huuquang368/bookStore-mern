import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

function BookList({ books }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Year</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publishYear}</td>
            <td>
              <div className="flex gap-x-4 ">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>

                <MdOutlineDelete
                  className="text-2xl text-orange-800 cursor-pointer"
                  onClick={() => {
                    document.getElementById(book._id).showModal();
                  }}
                />
                <DeleteModal id={book._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
