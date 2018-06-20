import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchContactRequest,onDeleteContact,onEditContact } from '../actions/contactActions';
import { Divider, Segment } from 'semantic-ui-react'

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
                  <button onClick={this.onEditHandle.bind(this,contact.id)} className="ui blue button">Edit</button>  
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
