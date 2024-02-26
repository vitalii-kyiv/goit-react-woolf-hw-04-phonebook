import ContactListItem from 'components/ContactListItem/ContactListItemItem';
const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts().map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
