import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

import './SearchForm.css';

const SearchForm = () => (
  <div className="search-form">
    <form>
      <Icon />
      <input className="search-form-input" type="text" />
      <Button innerText="Find" />
    </form>
  </div>
);


export default SearchForm;
