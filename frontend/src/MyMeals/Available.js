import React, { useEffect } from 'react'
import WorkoutDetails from './WorkoutDetails';
import { useWorkoutContext } from '../Hooks/useWorkoutContext';
import Services from '../MyMeals/Services';

const Available = () => {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts")  //data in json 
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
      console.log(json)
    }
    fetchWorkouts();
  }, [dispatch])

  return (
    <>
      <Services />
      <div className="row">{workouts && workouts.map((workout) => {
        return <><WorkoutDetails key={workout._id} {...workout} /></>
      })}</div>
    </>
  )
}
export default Available;

// import React, { useEffect } from 'react';
// import WorkoutDetails from '../Components/WorkoutDetails';
// import useWorkoutContext from '../Hooks/useWorkoutContext';

// const Workouts = () => {
//   const { workouts, dispatch } = useWorkoutContext();

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch("http://localhost:4000/api/workouts");
//       const json = await response.json();

//       if (response.ok) {
//         dispatch({ type: 'SET_WORKOUTS', payload: json });
//       }
//       console.log(json);
//     };
//     fetchWorkouts();
//   }, []);

//   return (
//     <>
//       <div className="row">{workouts && workouts.map((workout) => (
//         <WorkoutDetails key={workout._id} {...workout} />
//       ))}</div>
//     </>
//   );
// };

// export default Workouts;
