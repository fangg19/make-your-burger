import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, errorClear] = useHttpErrorHandler(axios);
    return (
      <Auxiliary>
        <Modal show={error} modalClosed={errorClear}>
          {error ? <p>An error has occured. Please try again.</p> : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxiliary>
    );
  };
};

export default withErrorHandler;
