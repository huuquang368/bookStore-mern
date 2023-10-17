import axios from "axios";
import { backendURL } from "../constants";

function DeleteModal({ id }) {
  const deleteBook = () => {
    axios
      .delete(`${backendURL}/${id}`)
      .then(() => {
        alert("Delete book successfully");
        location.reload();
      })
      .catch((err) => {
        alert("Error");
        console.log(err);
      });
  };
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Confirm!</h3>
          <p className="py-4">{`Are you sure to delete this book No. ${id}`}</p>
          <div className="flex justify-evenly">
            <button className="btn btn-error" onClick={deleteBook}>
              delete
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default DeleteModal;
