import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from '../actions/contactActions';
import { Divider, Segment } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'

const { fetchContactRequest,onDeleteContact,onEditContact } = actions;
class ContactList extends Component {

  componentDidMount() {
    this.props.fetchContactRequest();
  }
  onDeleteHandle = id => {
    this.props.onDeleteContact(id);
	}
  onEditHandle = id => {
    this.props.onEditContact(id);
  }
  render() {
    console.log("Props",this.props.contact)
    return (
        <div>
          {
            this.props.contacts.map((contact,index) => {
              return(
                <Segment key={index}>
                  { contact.fullname} => 	{contact.phone}
                <Divider section />
                  <Link to={`${contact.id}`}><button className="ui blue button">Edit</button></Link> 
                  <button onClick={this.onDeleteHandle.bind(this,contact.id)} className="ui red button">Delete</button>
              </Segment>
              );
            })
          }
        </div>
    );
  }
}

const mapStateToProps = state => {
    return state.contacts
}


export default connect(mapStateToProps,{ fetchContactRequest,onDeleteContact,onEditContact })(ContactList);
