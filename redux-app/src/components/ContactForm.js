import React, { Component } from 'react';
import actions from '../actions/contactActions';
import {connect} from 'react-redux';
import {Grid, Container, Button,  Form } from 'semantic-ui-react'

const  { onContactSubmit,fetchContactRequest,onUpdateContact} = actions;
class ContactForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          fullname: "",
          phone: ""
      }
  }

  componentDidMount () {
    this.props.fetchContactRequest();
  }
  onClearState = () => {
    this.setState({
      fullname: "",
      phone: ""
    })
  }

  onChangeHandler = (key,event) => {
    this.setState({[key]: event.target.value})
  }
  onSubmitHandler = e => {
    e.preventDefault();
    const contact = {
      id: this.props.match.params.id,
      fullname : this.state.fullname,
      phone: this.state.phone
    }
    if(this.state.isEditable){
      return new Promise((resolve, reject) => {
        this.props.onUpdateContact({contact,resolve,reject});
      }).then((resolve) => {
        this.setState({isEditable: false});
        this.props.history.push('/');
        this.onClearState();
      })
    }else{
      this.props.onContactSubmit(contact);
      this.onClearState();
    }

  }
  componentWillReceiveProps(nextProps) {
    if(nextProps !== this.state){
      const params = nextProps.match.params.id;
      nextProps.contacts.map((con) => {
          if(con.id == params){
            this.setState({fullname: con.fullname})
            this.setState({phone: con.phone})
            this.setState({isEditable: true})
          }
      });
    }  
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
           >{ this.state.isEditable ? "Edit": "Add" }</Button>
        </Form>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return  state.contacts
}


export default connect(mapStateToProps,{ onContactSubmit,fetchContactRequest,onUpdateContact })(ContactForm)
