import styles from './number-field.module.css';
import PropTypes from 'prop-types';
import Input from 'components/shared/components/Input/Input';
import { Component } from 'react';

class NumberField extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <Input
        name="number"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        label="Number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
      />
    );
  }
}

export default NumberField;
