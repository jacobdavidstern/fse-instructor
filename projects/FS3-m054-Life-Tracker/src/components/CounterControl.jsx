// CounterControl.jsx

import React from 'react';

export default function CounterControl({ onAdd, onClear, totalCount }) {
  return (
    <div className="container my-5">
      <div className="row g-4 shadow rounded bg-white p-5">
        <div className="col-12 col-md-4 d-grid">
          <button className="btn btn-primary btn-lg m-1" onClick={onAdd}>
            + Add New Counter
          </button>
        </div>

        <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center">
          <h3 className="text-secondary mb-2">Total Count:</h3>
          <h2 className="fw-bold text-primary">{totalCount}</h2>
        </div>

        <div className="col-12 col-md-4 d-grid">
          <button className="btn btn-danger btn-lg m-1" onClick={onClear}>
            Clear All Counters
          </button>
        </div>
      </div>
    </div>
  );
}
