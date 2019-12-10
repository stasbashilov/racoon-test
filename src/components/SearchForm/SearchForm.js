import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

import './SearchForm.css';

class SearchForm extends React.Component {

  render() {
    return (
      <div className="search-form">
        <form>
          <Icon />
          <input className="search-form-input" type="text" />
          <Button innerText="Find" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
