import styles from './number-field.module.css';
import PropTypes from 'prop-types';
import Input from 'components/shared/components/Input/Input';
import { Component } from 'react';

class NumberField extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label className={styles['label-wrapper']}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={styles.input}
          onChange={e => {
            onChange(e.target.value, 'number');
          }}
          value={value}
        />
      </label>
    );
  }
}

export default NumberField;

NumberField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
