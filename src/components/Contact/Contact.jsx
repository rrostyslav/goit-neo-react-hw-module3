import css from './Contact.module.css';
import UserIcon from '@/assets/icons/user.svg?react';
import PhoneIcon from '@/assets/icons/phone.svg?react';
import Button from '@/components/Button';

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <div className={css.userInfoProp}>
          <UserIcon />
          <span>{name}</span>
        </div>
        <div className={css.userInfoProp}>
          <PhoneIcon />
          <span>{number}</span>
        </div>
      </div>
      <div className={css.actions}>
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
}
