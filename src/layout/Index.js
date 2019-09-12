import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { readAction } from '../actions/readAction';

const Index = () => {
  return (
    <div className='container'>
      <div className='row'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'user.name'}</td>
              <td>{'user.username'}</td>
              <td>
                <button className='button muted-button'> Edit </button>
                <button className='button muted-button'> Delete </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  readAction: () => { dispatch(readAction()) }
})

export default withRouter(connect(null, mapDispatchToProps)(Index));