import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import Popin from '../Popin.js';

export default (props) => {
  return (
    <>
      {props.user._id ? (
        <Redirect to="/profile" />
      ) : (
        <Popin one={(
          <>
            <div className="cta">
              <Link className="btn" to="/signup">Sign up</Link>
              <Link className="btn" to="/login">Log in</Link>
            </div>
          </>
        )} />
      )}
    </>
  );
}


