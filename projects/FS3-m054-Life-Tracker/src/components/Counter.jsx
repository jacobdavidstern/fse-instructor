// Counter.jsx

import React from 'react';
import { Button, Card, Badge, Row, Col } from 'react-bootstrap';

export default function Counter({ id, name, count, step, onUpdate, onDelete }) {
  return (
    <Card
      className="m-3 shadow rounded text-center"
      style={{ width: '20rem', minHeight: '16rem' }}
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        <h2 className="fw-bold text-dark mb-3">{name}</h2>

        <div>
          <h1 className="fw-bold text-primary mb-0">{count}</h1>
          <h3 className="text-secondary">times</h3>
        </div>

        <Badge
          bg="info"
          text="primary"
          className="mb-3 fs-6 rounded-pill align-self-center"
        >
          +{step} per click
        </Badge>

        <Row className="g-2">
          <Col xs={6}>
            <Button
              variant="warning"
              className="w-100 fw-bold text-light"
              onClick={() => onUpdate(id, { count: count - step })}
            >
              -1
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="success"
              className="w-100 fw-bold text-light"
              onClick={() => onUpdate(id, { count: count + step })}
            >
              +1
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="secondary"
              className="w-100 fw-bold text-light"
              onClick={() => onUpdate(id, { count: 0 })}
            >
              Reset
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="danger"
              className="w-100 fw-bold text-light"
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
