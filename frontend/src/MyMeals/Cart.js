import React from 'react';

const Cart = () => {
  // Retrieve data from local storage
  const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];

  // Preprocess the data to merge duplicates and count occurrences
  const mergedWorkouts = storedWorkouts.reduce((acc, workout) => {
    const existingWorkout = acc.find(item => item.title === workout.title);
    if (existingWorkout) {
      existingWorkout.count += 1; // Increment count if the workout already exists
    } else {
      acc.push({ ...workout, count: 1 }); // Add new workout with count 1
    }
    return acc;
  }, []);

  // Calculate total price
  const totalPrice = mergedWorkouts.reduce((total, workout) => {
    return total + (workout.reps * workout.count);
  }, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {mergedWorkouts.map((workout, index) => (
          <li key={index}>
            <h3>{workout.title}</h3>
            {/* {workout.load && <p>Weight: {workout.load} gs</p>} */}
            <p>Price: ${workout.reps}</p>
            <p>Count: {workout.count}</p> {/* Display count of occurrences */}
            <p>Total for this item: ${workout.reps * workout.count}</p>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
