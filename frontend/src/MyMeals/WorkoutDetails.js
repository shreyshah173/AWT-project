import React from 'react';
import { useWorkoutContext } from "../Hooks/useWorkoutContext"

const WorkoutDetails = (workout) => {
    const { dispatch } = useWorkoutContext();

    const handleCart = () => {
        // Create an array to store workouts (if it doesn't exist yet)
        const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];

        // Add the current workout to the array
        storedWorkouts.push(workout);

        // Store the updated array back into local storage
        localStorage.setItem('workouts', JSON.stringify(storedWorkouts));

        console.log('Workout added to cart:', workout.title);
    }


    return (
        <div className="col-lg-4 mb-3 mb-sm-0 p-2">
            {/* <div className="card mt-1 ms-3">
                <div className="card-body">
                    <h3 className="card-title primaryColour">{workout.title}</h3>
                    {workout.load &&
                        <p className="card-text">Weight: {workout.load} gs</p>
                    }
                    <p className="card-text">Quantity: {workout.reps}</p>
                    <button onClick={handleCart}>Add to Cart</button>
                </div>
            </div> */}

            <div class="container">
                <div class="card">
                    <img class="card-img-top" src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg" alt="Card image" style={{width:"100%"}} />
                        <div class="card-body">
                            <h4 class="card-title">{workout.title}</h4>
                            <p class="card-text">{workout.reps}</p>
                            <a href="#" class="btn btn-primary">{workout.load} stars</a>
                        </div>
                    <button onClick={handleCart}>Add to Cart</button>
                </div>
                <br />
            </div>


        </div>
    );
};

export default WorkoutDetails;
