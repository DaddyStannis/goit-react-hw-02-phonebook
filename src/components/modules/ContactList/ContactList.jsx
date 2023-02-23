import styles from './contact-list.module.css';
import List from './List/List';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, onDelete, onFilter } = this.props;

    return (
      <div className={styles.wrapper}>
        <Filter onFilter={onFilter} />
        <List onDelete={onDelete} contacts={contacts} />
      </div>
    );
  }
}

export default ContactList;
