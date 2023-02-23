import styles from './filter.module.css';
import Input from 'components/shared/components/Input/Input';
import PropTypes from 'prop-types';

import { Component } from 'react';

class Filter extends Component {
  render() {
    const { onFilter } = this.props;

    return (
      <Input
        name="filter"
        title="filter"
        label="Find by name"
        onChange={onFilter}
      />
    );
  }
}

export default Filter;
