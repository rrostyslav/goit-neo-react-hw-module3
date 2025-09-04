import css from './ContactForm.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik } from 'formik';

export default function ContactForm() {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input name="name" label="Name" placeholder="Enter name" onInput={handleChange} />
            <Input name="number" label="Number" placeholder="Enter number" onInput={handleChange} />
            <Button>Add contact</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
