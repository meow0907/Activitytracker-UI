import React from "react";
import { Button } from "react-bootstrap";

const Input = ({ placeholder = "Add placeholder", variant = "danger" }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75">
        <input className="form-control" placeholder={placeholder} />
      </div>
      <div>
        <Button variant={variant}> Submit</Button>
      </div>
    </div>
  );
};

export default Input;
