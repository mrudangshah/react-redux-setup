
export const readAction = () => dispatch => {
  dispatch({
    type: 'READ_USER',
    data: [ { email: 'abc@abc.com'}, { email: 'abc@abc.com'}, { email: 'abc@abc.com'} ]
  })
}