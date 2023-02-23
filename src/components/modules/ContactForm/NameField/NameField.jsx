import styles from './name-field.module.css';
import PropTypes from 'prop-types';
import Input from 'components/shared/components/Input/Input';
import { Component } from 'react';

class NameField extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input
        label="Name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    );
  }
}

export default NameField;
