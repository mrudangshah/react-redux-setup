import React from 'react';
import { connect } from 'react-redux';

const Create = () => {
  return (
    <div className='container'>
      <div className='row'>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

/* const mapDispatchToProps = dispatch => ({
  readAction: () => { dispatch(readAction()) }
}) */

export default connect()(Create);