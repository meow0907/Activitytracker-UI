import React from "react";
import { Form, Button } from "react-bootstrap";
import { BsTrash3Fill } from "react-icons/bs";

const SubActivities = () => {
  return (
    <div className="row  mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Form.Check type="checkbox" />
          <div className="px-2">SubActivity 1</div>
        </div>
        <div>
          <Button variant="danger" size="sm">
            <BsTrash3Fill />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubActivities;
