// App.jsx

import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.jsx';
import AppHeader from './components/AppHeader.jsx';
import CounterControl from './components/CounterControl.jsx';
import CounterContainer from './components/CounterContainer.jsx';
import AddCounterModal from './components/AddCounterModal.jsx';

export default function App() {
  const [counters, setCounters] = useLocalStorage(
    'daily-life-tracker-counters',
    []
  );

  const [showModal, setShowModal] = useState(false);

  function addCounter(name, step) {
    setCounters([
      ...counters,
      { id: Date.now().toString(), name, count: 0, step },
    ]);
    setShowModal(false);
  }

  function updateCounter(id, update) {
    setCounters(counters.map((c) => (c.id === id ? { ...c, ...update } : c)));
  }

  function deleteCounter(id) {
    setCounters(counters.filter((c) => c.id !== id));
  }

  function clearAll() {
    setCounters([]);
  }

  const totalCount = counters.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <div className="bg-light min-vh-100 px-4">
      <AppHeader />
      <AddCounterModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onCreate={addCounter}
        empty={counters.length === 0}
      />
      <CounterControl
        onAdd={() => setShowModal(true)}
        onClear={clearAll}
        totalCount={totalCount}
      />
      <CounterContainer
        counters={counters}
        onUpdate={updateCounter}
        onDelete={deleteCounter}
      />
    </div>
  );
}
