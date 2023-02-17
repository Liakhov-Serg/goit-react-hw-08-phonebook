import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './ContactList.module.css';

export const ContactList = ({ deleteContact }) => {
  const contacts = useSelector((state) => state.contacts.items)
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
   contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};