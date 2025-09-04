import css from './ContactList.module.css';
import Contact from '@/components/Contact/index.js';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.container}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </div>
  );
}
