import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { addContact } from '../../redux/operations';
import { Form, Label } from './ContactForm.styled';
import { Btn } from '../Btn/Btn';
import { InputItem } from './InputItem';
import { notifySettings } from '../../utils/notifySettings';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.items);

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const includesName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      return Notiflix.Notify.warning(
        `${name} is already in contacts`,
        notifySettings
      );
    }

    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Fullname
        <InputItem
          onChange={onInputChange}
          value={name}
          name="name"
          placeholder="Enter contact`s name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
      <Label>
        Phonenumber
        <InputItem
          onChange={onInputChange}
          value={phone}
          type="tel"
          name="phone"
          placeholder="Enter contact`s number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Btn
        type="submit"
        icon={MdPersonAddAlt1}
        status="add"
        text="Add contact"
      />
    </Form>
  );
};
