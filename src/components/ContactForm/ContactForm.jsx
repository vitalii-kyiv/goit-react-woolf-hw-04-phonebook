const { useState } = require('react');

const ContactForm = ({addContact}) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target)
    addContact({ name, number });
    setName("")
    setNumber("")
      };

      const handleChange = evt => {
        const { name, value } = evt.target;
      
        if (name === 'name') {
          setName(value);
        } else if (name === 'number') {
          setNumber(value);
        }
      };

  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }

export default ContactForm;
