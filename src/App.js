import React, { useState } from "react";
import "./styles.css";
import { Form, Row, Col } from "react-bootstrap";
import { FormInput } from "./FormInput";

export default function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  let errors = {
    username: undefined
  };

  const messages = {
    usernameLabel: "Oppgi brukers navn: ",
    usernamePlaceholder: "tast inn brukerBrukernavn"
  };

  const handleInput = (e) => {
    if (!e.target.value) {
      setError("Frigging påkrevd");
    } else {
      setError("");
    }
    console.log(JSON.stringify(errors));
    console.log(errors["username"]);
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Form>
        <Row>
          <Col>
            <FormInput
              required
              inputType="text"
              name="username"
              value={username}
              onChange={handleInput}
              error={error}
              messages={messages}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
