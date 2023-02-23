import styles from './contact-form.module.css';
import NumberField from './NumberField/NumberField';
import NameField from './NameField/NameField';
import Button from 'components/shared/components/Button/Button';
import { Component } from 'react';

class ContactForm extends Component {
  state = { name: '', number: '' };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.wrapper}>
        <div className={styles['input-wrapper']}>
          <NameField onChange={this.handleChange} />
          <NumberField onChange={this.handleChange} />
        </div>

        <Button text="Add" type="submit" />
      </form>
    );
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state);
    e.target.reset();
    // this.reset(); // Тут є питання )
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
}

export default ContactForm;
