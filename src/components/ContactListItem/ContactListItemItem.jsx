const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li>
      <p>
        {contact.name}:{contact.number}
      </p>
      <button onClick={() => deleteContact(contact.id)}>delete</button>
    </li>
  );
};

export default ContactListItem;
