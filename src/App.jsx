import ContactForm from '@/components/ContactForm';
import SearchBox from '@/components/SearchBox';
import ContactList from '@/components/ContactList';
import { useState } from 'react';
import useSearch from '@/hooks/useSearch.js';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const {
    isSearchMode,
    searchQuery,
    setSearchQuery,
    filtered: filteredContacts,
  } = useSearch(contacts, (item) => item.name);

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={isSearchMode ? filteredContacts : contacts} onDelete={handleDelete} />
    </div>
  );
}
