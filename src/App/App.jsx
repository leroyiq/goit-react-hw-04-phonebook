import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Wrapper, Title } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm, ContactList, Filter} from 'components';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) || initContacts
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    return window.localStorage.setItem(
      'contacts',
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const onSubmit = ({ name, number }) => {
    const idContact = 'id-' + nanoid(3);
    setContacts(prevState => [
      ...prevState,
      { id: idContact, name, number },
    ]);
    toast.success('Successfully contact created!', {
      duration: 1500,
    });
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = id => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== id)
    );
    toast.success('Contact deleted!', {
      duration: 1500,
    });
  };

  return (
    <Wrapper>
      <Title>Phone Book</Title>
      <ContactForm addContact={onSubmit} onContacts={contacts} />
      <>
        {contacts.length > 0 && <Title>Contacts</Title> && (
          <Filter onFilter={filter} onChange={handleChange} />
        )}

        <ContactList
          contacts={handleFilter()}
          onDelete={handleDelete}
        />
      </>

      <Toaster />
    </Wrapper>
  );
}

