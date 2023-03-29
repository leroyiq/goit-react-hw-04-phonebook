import { Component } from 'react';
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

const CLEAR_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    onContacts: PropTypes.array.isRequired,
  };

  state = CLEAR_STATE;

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onContacts } = this.props;
    const checkContact = onContacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!checkContact) {
      this.props.addContact({ name, number });
      this.setState(CLEAR_STATE);
      return;
    }
    toast.error(`${name} is already in contact`, {
      duration: 1500,
    });

    // this.setState(CLEAR_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} aria-controls="form">
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}
