import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Course from "./pages/Course/Course";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  const [queues, setQueues] = useState([[0, 3], [1], [2, 1, 1], [3], [4]]);
  const [waitingCustomers, setWaitingCustomers] = useState([3, 4]);

  const addCustomerToWaitingQueue = () => {
    const customer = Math.floor(Math.random() * 10);
    setWaitingCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQueues((prev) => {
        const updatedQueues = prev.map((queue, index) => {
          const updatedQueue = [...queue];
          if (updatedQueue.length > 0) {
            if (updatedQueue[0] > 0) {
              updatedQueue[0]--;
            } else {
              updatedQueue.shift();
              if (waitingCustomers.length > 0) {
                const shortestQueueIndex = prev.findIndex((queue) => {
                  const queueSum = queue.reduce((sum, value) => sum + value, 0);
                  const minQueueSum = Math.min(
                    ...prev.map((q) => q.reduce((sum, value) => sum + value, 0))
                  );
                  return queueSum === minQueueSum;
                });
                if (index === shortestQueueIndex) {
                  const customerToAdd = waitingCustomers.shift();
                  prev[shortestQueueIndex].push(customerToAdd);
                }
              }
            }
          }
          return updatedQueue;
        });

        return updatedQueues;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [waitingCustomers]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              queues={queues}
              waitingQueue={waitingCustomers}
              addCustomer={addCustomerToWaitingQueue}
            />
          }
        />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
