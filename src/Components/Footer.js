import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom p-3">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetdata();
        }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        Total : {props.totalAmount}
      </div>
      <button className="btn btn-secondary col-2">Pay</button>
    </div>
  );
}
