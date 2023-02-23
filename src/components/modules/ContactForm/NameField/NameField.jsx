import styles from './name-field.module.css';
import PropTypes from 'prop-types';
import Input from 'components/shared/components/Input/Input';
import { Component } from 'react';

class NameField extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label className={styles['label-wrapper']}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={styles.input}
          onChange={e => {
            onChange(e.target.value, 'name');
          }}
          value={value}
        />
      </label>
    );
  }
}

export default NameField;

NameField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
