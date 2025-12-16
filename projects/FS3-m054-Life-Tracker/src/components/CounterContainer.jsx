// CounterContainer

import React from 'react';
import Counter from './Counter.jsx';

export default function CounterContainer({ counters, onUpdate, onDelete }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          name={counter.name}
          count={counter.count}
          step={counter.step}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
