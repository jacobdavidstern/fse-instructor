// AddCounterModal.jsx

import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

export default function AddCounterModal({ show, onHide, onCreate, empty }) {
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);

  const handleCreate = () => {
    if (name) {
      onCreate(name, step);
      setName('');
      setStep(1);
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title className="mx-auto">Create New Counter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Counter Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Counter name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Increment Amount:</Form.Label>
            <Form.Control
              type="number"
              min={1}
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </Form.Group>
        </Form>
        <div className="d-flex justify-content-center gap-2 my-3">
          <Button variant="primary" onClick={handleCreate}>
            Create Counter
          </Button>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        {empty && (
          <Alert variant="white" className="text-center mt-4">
            <h5 className="fw-bold mb-1">No counters yet</h5>
            <div>Create your first counter to start tracking!</div>
          </Alert>
        )}
      </Modal.Footer>
    </Modal>
  );
}
