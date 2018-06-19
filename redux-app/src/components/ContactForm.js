import React, { Component } from 'react';
import { onPostSubmit} from '../actions/contactActions';
import {connect} from 'react-redux';

import {Grid, Container, Button, Checkbox, Form } from 'semantic-ui-react'


class ContactForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          fullname: "",
          phone: ""
      }
  }


  onChangeHandler = (key,event) => {
    this.setState({[key]: event.target.value})
  }
  onSubmitHandler = e => {
    e.preventDefault();
    const contact = {
      fullname : this.state.fullname,
      phone: this.state.phone
    }
    this.props.onPostSubmit(contact);
    this.setState({fullname: "",phone: ""});
  }
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
          <Form>
          <Form.Field>
            <input 
             placeholder='Fullname'  
             value={this.state.fullname} 
             onChange={this.onChangeHandler.bind(this,"fullname")}
            />
          </Form.Field>
          <Form.Field>
            <input 
             placeholder='Contact Number'
             value={this.state.phone} 
             onChange={this.onChangeHandler.bind(this,"phone")}
              />
          </Form.Field>
          <Button
           primary
           type='submit'
           onClick={this.onSubmitHandler}
           >Submit</Button>
        </Form>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </Container>
    );
  }
}

export default connect(null,{ onPostSubmit })(ContactForm)
