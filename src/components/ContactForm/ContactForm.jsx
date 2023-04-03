import { useState } from 'react';
import {
  Form,
  Button,
  Label,
  Input,
  Span,
} from './ContactForm.styled';
import { FcPlus } from 'react-icons/fc';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact, onContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        throw new Error(`Unsupported type of ${name}`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const checkContact = onContacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!checkContact) {
      addContact({ name, number });
      setName('');
      setNumber('');
      return;
    }
    toast.error(`${name} is already in contact`, {
      duration: 1500,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} aria-controls="form">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="David Sterling"
            //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="+ 380 66 666 99 99"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">
          <FcPlus size="20px" /> <Span> Add contact</Span>
        </Button>
      </Form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  onContacts: PropTypes.array.isRequired,
};
