import PropTypes from 'prop-types';
import { ContactDelitButton, ContactItem } from './Contact.styled';

const Contact = ({id, name, number, onDeleteContact}) => (
  <ContactItem key={id}>
    <p>{name}: {number}</p>
    <ContactDelitButton 
    type="button"
    onClick={()=> onDeleteContact(id)}
    >Delete</ContactDelitButton>
  </ContactItem>
)

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
