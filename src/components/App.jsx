import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ number, name }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (
      this.state.contacts.some(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`Contact name ${name} has already exist.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
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
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          <Filter changeFilter={this.changeFilter} filter={this.state.filter} />
          <ContactList
            filteredContacts={this.getFilteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
