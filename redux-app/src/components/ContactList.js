import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchContactRequest } from '../actions/contactActions';
import ContactDisplay from './ContactDisplay';


class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContactRequest();
  }
  render() {
    console.log(this.props)
    return (
        <div>
          {
            this.props.contacts.map((contact,index) => {
              return <ContactDisplay key={index} contact={contact} />
            })
          }

        </div>
    );
  }
}

const mapStateToProps = state => {
    return  state.contacts
}


export default connect(mapStateToProps,{ fetchContactRequest })(ContactList);
