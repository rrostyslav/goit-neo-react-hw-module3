import css from './Button.module.css';

export default function Button({ children, onClick }) {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
}
