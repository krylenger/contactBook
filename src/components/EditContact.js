import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [pager, setPager] = useState('');

  const { id } = useParams();

  const contacts = useSelector(state => state);
  const currentContact = contacts.find(contact => contact.id === parseInt(id));
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameIsInContacts = contacts.find(contact => contact.id !== parseInt(id) && contact.name === name);
    const lastNameIsInContacts = contacts.find(contact => contact.id !== parseInt(id) && contact.lastname === lastname);
    const ageIsInContacts = contacts.find(contact => contact.id !== parseInt(id) && contact.age === Number.parseInt(age));
    const pagerIsInContacts = contacts.find(contact => contact.id !== parseInt(id) && contact.pager === Number.parseInt(pager));

    if (!name || !lastname || !age || !pager) {
      return toast.warning('Please fill in all fields.')
    }

    if (nameIsInContacts && lastNameIsInContacts && ageIsInContacts && pagerIsInContacts) {
      return toast.error('This contact is already exist.')
    }

    const data = {
      id: parseInt(id),
      name,
      lastname,
      age,
      pager,
    }

    console.log(data);

    dispatch({type: 'EDIT_CONTACT', payload: data});
    toast.success('New contact was updated successfully!');
    history.push('/');

  }

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setLastname(currentContact.lastname);
      setAge(currentContact.age);
      setPager(currentContact.pager);
    }
  }, [currentContact])

  return (
    <div className="container">
    {currentContact ? (
      <>
        <h1 className="display-3 text-center">Edit Contact {id}</h1>
        <div className="row">
          <div className="col-md-6 shadow mx-auto pd-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Name" className="form-control my-2" value={name} onChange={event => setName(event.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="LastName" className="form-control my-2" value={lastname} onChange={event => setLastname(event.target.value)} />
              </div>
              <div className="form-group">
                <input type="number" placeholder="Age" className="form-control my-2" value={age} onChange={event => setAge(event.target.value)} />
              </div>
              <div className="form-group">
              <input type="number" placeholder="Pager" className="form-control my-2" value={pager} onChange={event => setPager(event.target.value)} />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input type="submit" value="Update Contact" className="btn btn-block btn-dark m-1" />
                <Link to="/" className="btn btn-danger m-1" >Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </>) : (
        <h1>Contact with id {id} does not exist.</h1>
      )}

    </div> 
  )
}

export default EditContact;
