import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {Grid, Container, Button, Checkbox, Form } from 'semantic-ui-react'


class App extends Component {
  render() {
    const style = {
      marginTop: "10px",
      marginLeft: "15px"
    }
    return (
      <Container>
      <Grid style={style}>
        <Grid.Row columns={2}>
        <Grid.Column>
          <ContactForm />
        </Grid.Column>
        <Grid.Column>
           <ContactList />
        </Grid.Column>
        </Grid.Row>
       </Grid>
      </Container>
    );
  }
}

export default  App;
