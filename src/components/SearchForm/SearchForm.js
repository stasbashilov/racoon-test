import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

import './SearchForm.css';

class SearchForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const output = document.createElement('div');
    const data = [...event.target.elements].reduce((data, element) => {
      if (element.name && element.value) {
        data[element.name] = element.value;
      }
      return data;
    }, {});
    output.textContent = JSON.stringify(data);
    // document.body.appendChild(output);
  };

  render() {
    return (
      <div className="search-form">
        <form action="/search" onSubmit={this.handleSubmit}>
          <Icon />
          <input className="search-form-input" type="text" name="q" />
          <Button innerText="Find" />
        </form>
      </div>
    );
  }
}

export default SearchForm
