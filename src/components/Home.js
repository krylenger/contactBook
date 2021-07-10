import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
    toast.success('Contact was deleted successfully.')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/contactBook/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-15 mx-auto">
          <table className="col-md-8 mx-auto">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col" >#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th scope="col">Pager</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr className="text-center" key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.age}</td>
                  <td>{contact.pager}</td>
                  <td className="d-flex justify-content-center">
                    <Link to={`/contactBook/edit/${contact.id}`} className="btn btn-small btn-primary p-1">
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-sm btn-danger mx-1 p-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
