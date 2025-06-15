// Updated for user Anemith
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Glyphicon } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: ''
    };
    this.handleIdClick = this.handleIdClick.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleIdClick() {
    axios
      .get('https://api.github.com/users/Anemith')
      .then(response => this.setState({ id: response.data.id }))
      .catch(err => console.error('Помилка запиту ID:', err));
  }

  handleNameClick() {
    axios
      .get('https://api.github.com/users/Anemith')
      .then(response => this.setState({ name: response.data.name || 'Ім\'я не вказано' }))
      .catch(err => console.error('Помилка запиту Name:', err));
  }

  render() {
    return (
      <div className="button_container">
        <Button className="button id-button" onClick={this.handleIdClick}>
          <Glyphicon glyph="info-sign" /> Отримати ID
        </Button>
        <p className="id-text">ID: {this.state.id}</p>
        <Button className="button name-button" onClick={this.handleNameClick}>
          <Glyphicon glyph="user" /> Отримати Ім'я
        </Button>
        <p className="name-text">Ім'я: {this.state.name}</p>
      </div>
    );
  }
}

export default App;