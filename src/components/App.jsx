import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const keyContacts = localStorage.getItem('keyContacts');
    return keyContacts ? JSON.parse(keyContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('keyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ number, name }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Contact name ${name} has already exist.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        paddingLeft: '40px',
        justifyContent: 'left',
        alignItems: 'left',
        fontSize: 24,
        color: '#010101',
        border: '1px solid black',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} filter={filter} />
        <ContactList
          filteredContacts={getFilteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;
