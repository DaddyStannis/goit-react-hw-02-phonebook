import styles from './contact-form.module.css';
import NumberField from './NumberField/NumberField';
import NameField from './NameField/NameField';
import Button from 'components/shared/components/Button/Button';
import { Component } from 'react';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state);
    this.reset();
  };

  handleChange = (fieldValue, fieldName) => {
    this.setState({ [fieldName]: fieldValue });
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.wrapper}>
        <div className={styles['input-wrapper']}>
          <NameField onChange={this.handleChange} value={name} />
          <NumberField onChange={this.handleChange} value={number} />
        </div>

        <Button text="Add" type="submit" />
      </form>
    );
  }
}

export default ContactForm;
