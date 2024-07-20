import React from "react";
import { Card, Accordion, Form } from "react-bootstrap";
import Input from "../components/Input";
import SubActivities from "../components/SubActivities";
import Notify from "../components/Notify";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <h1 className="text-center">Activity Tracker</h1>
      </div>

      <div className="row">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Body className="overflow-auto">
            <Input placeholder="Add new activity" />
            <div className="m-3">
              <Notify msg="No activities found" />
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Form.Check type="checkbox" />
                    <div className="mt-1 px-2">Activity Number 1</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <SubActivities />
                    <SubActivities />
                    <SubActivities />
                    <SubActivities />
                    <Input placeholder="Add new subactivity" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
