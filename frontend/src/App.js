import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Workouts from "./Pages/Workouts";
import WorkoutForm from "./Components/WorkoutForm";
import Navigation from "./MyMeals/Navigation";
import Available from "./MyMeals/Available";
import Cart from "./MyMeals/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <div style={{marginTop:'140px'}}></div> */}
        <Navigation />
        <div className="pages">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/NewWorkout" element={<WorkoutForm />} /> */}
            <Route path="/" element={<Available />} />
            <Route path="/NewWorkout" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
