import React, { Component } from "react";
import PropTypes from 'prop-types';
import './ContactForm.module.css';
import { render } from "@testing-library/react";

export class ContactForm extends Component {
  state = {
  contacts: [],
  name: ''
}
};

handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
};

handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        name: '',
        number: ''
    });
};

render() {
    const { name, number } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>

            <input
  type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Name"

  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
            <input
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                placeholder="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
            />

            <button type="submit">Add contact</button>
        </form>
    )
}
