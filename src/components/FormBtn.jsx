import React from 'react';

function FormBtn(props) {
  return (
    <button className="form-btn d-flex border-0 p-2 px-5">
      {props.children}
    </button>
  );
}

export default FormBtn;
