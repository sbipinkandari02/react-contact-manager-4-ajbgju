import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  const [person2, setPerson2] = useState('');
  function handleChange2(event) {
    setPerson2(event.target.value);
    // console.log(event.target.value);
  }
  function handlesbmt(event) {
    event.preventDefault();
    if (person2 != '') {
      console.log(props);
      props.handlesbmt(person2);
      setPerson2('');
    } else {
      alert('field is empty');
    }
  }

  // }
  // function handleChange(e) {
  //   setPerson(e.target.value);
  // }

  // function handleSubmit(e) {
  //   if(person !== '') {
  //     props.handleSubmit(person);
  //     setPerson('');
  //   }
  //   e.preventDefault();
  // }
  return (
    <form onSubmit={handlesbmt}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange2}
        value={person2}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handlesbmt={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne'];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);
