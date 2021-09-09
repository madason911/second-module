import React, { useState } from "react";
import Counter from "./counter";
const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId && counter.value > 0) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
