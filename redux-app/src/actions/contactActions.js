const actions = {
  FETCH_CONTACT_REQUEST: 'FETCH_CONTACT_REQUEST',
  FETCH_CONTACT_SUCCESS: 'FETCH_CONTACT_SUCCESS',
  FETCH_CONTACT_FAILED: 'FETCH_CONTACT_FAILED',
  CREATE_CONTACT_REQUEST: 'CREATE_CONTACT_REQUEST',
  DELETE_CONTACT_REQUEST: 'DELETE_CONTACT_REQUEST',
  UPDATE_CONTACT_REQUEST: 'UPDATE_CONTACT_REQUEST',
  EDIT_CONTACT_REQUEST: 'EDIT_CONTACT_REQUEST',
  fetchContactRequest: () => ({
    type: actions.FETCH_CONTACT_REQUEST
  }),
  onContactSubmit: contact => ({
    type: actions.CREATE_CONTACT_REQUEST,
    contact
  }),
  onEditContact: id => ({
    type: actions.EDIT_CONTACT_REQUEST,
    id
  }),
  onDeleteContact: id => ({
    type: actions.DELETE_CONTACT_REQUEST,
    id
  }),
  onUpdateContact : ({contact,resolve,reject}) => ({
    type: actions.UPDATE_CONTACT_REQUEST,
    contact,
    resolve,
    reject
  })
}


export default actions;
