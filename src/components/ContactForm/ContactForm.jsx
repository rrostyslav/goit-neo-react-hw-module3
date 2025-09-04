import css from './ContactForm.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';

export default function ContactForm({ onAddContact }) {
  const handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    onAddContact(contact);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleAddContact}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ field }) => <Input {...field} label="Name" placeholder="Enter name" />}
            </Field>
            <Field name="number">
              {({ field }) => <Input {...field} label="Number" placeholder="Enter number" />}
            </Field>
            <Button type="submit">Add contact</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
