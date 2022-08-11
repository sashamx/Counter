import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const [counters, setCounters] = useState([
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ]);

    const handleIncrement = (id) => {        
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                counter = { ...counter, value: counter.value + 1 }
            }
            return counter;
        })
        setCounters(newCounters);
    };
    const handleDecrement = (id) => {
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                counter = { ...counter, value: counter.value - 1 }
            }
            return counter;
        })
        setCounters(newCounters);
    };

    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    
    return counters.map((count) => <Counter key={count.id} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} {...count} />);
};
export default CountersList;