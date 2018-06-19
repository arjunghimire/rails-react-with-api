import React from 'react';
import { Divider, Segment } from 'semantic-ui-react'

const ContactDisplay = (props) =>  {
  return(
  	  <Segment>
	    { props.contact.fullname}
	    <Divider section />
	    {props.contact.phone}
	  </Segment>
  )
}

export default ContactDisplay;
