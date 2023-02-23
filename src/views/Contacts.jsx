import s from '../Styles.module.css';
import { ContacstForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactList';

const Contacts = () => {
  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>
        Enter a name and phone number to add a contact
      </h2>
      <ContacstForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;