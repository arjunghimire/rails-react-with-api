import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from '../actions/contactActions';
import { Divider, Segment } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'
import {  notification } from 'antd';

const { fetchContactRequest,onDeleteContact,onEditContact } = actions;
class ContactList extends Component {

  componentDidMount() {
    return new Promise((resolve, reject) => {
      this.props.fetchContactRequest({resolve,reject});
    })
  }
  onDeleteHandle = ({ contact}) =>{
    const id = contact.id;
    return new Promise((resolve, reject) => {
      this.props.onDeleteContact({id,resolve,reject});
    }).then((resolve) => {
      notification["success"]({
        message: resolve
      });
    })
    .catch((error) => {
      console.log("Response",error)
    });
  }

  render() {
    return (
        <div>
          {
            this.props.contacts.contacts.map((contact,index) => {
              return(
                <Segment key={index}>
                  { contact.fullname} => 	{contact.phone}
                <Divider section />
                  <Link to={`${contact.id}`}><button className="ui blue button">Edit</button></Link> 
                  <button onClick={ () => this.onDeleteHandle({ contact })} className="ui red button">Delete</button>
              </Segment>
              );
            })
          }
        </div>
    );
  }
}

const mapStateToProps = state => {
    return{
      contacts: state.contacts,
      error: state.error
    } 
}


export default connect(mapStateToProps,{ fetchContactRequest,onDeleteContact,onEditContact })(ContactList);
