import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {Grid, Container } from 'semantic-ui-react'
import {Switch, Route } from 'react-router-dom'
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
          <Switch>
            <Route path="/" exact component={ContactForm} />
            <Route path="/:id" exact component={ContactForm} />
          </Switch>
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
