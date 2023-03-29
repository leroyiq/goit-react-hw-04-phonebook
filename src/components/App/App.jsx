import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, Title } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const myPhoneNumber = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (myPhoneNumber) {
      this.setState({ contacts: myPhoneNumber });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = ({ name, number }) => {
    const idContact = 'id-' + nanoid(3);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: idContact, name, number },
      ],
    }));
    toast.success('Successfully contact created!', {
      duration: 1500,
    });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== id
      ),
    }));
    toast.success('Contact deleted!', {
      duration: 1500,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Wrapper>
        <Title>Phone Book</Title>
        <ContactForm
          addContact={this.onSubmit}
          onContacts={contacts}
        />
        <>
          {contacts.length > 0 && <Title>Contacts</Title> && (
            <Filter onFilter={filter} onChange={this.handleChange} />
          )}

          <ContactList
            contacts={this.handleFilter()}
            onDelete={this.handleDelete}
          />
        </>

        <Toaster />
      </Wrapper>
    );
  }
}
