import React from 'react';
import classes from '../Modal/Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  // this works only in a class based component
  // shouldComponentUpdate(nextProps, nextState) {
  //     return (
  //       nextProps.show !== this.props.show || nextProps.children !== this.props.children
  //     );
  //   };

  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

export default React.memo(
  Modal,
  (nextProps, prevProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
