import React from 'react';
import img from "./logo2.png";
import './Navigation.css'

const Navigation = () => {
  return (
    <section id="home">
        <section>
            <nav id="navbar">
                <div id="logo">
                    <img src={img} alt="MyMeals.com" />
                </div>
                <ul>
                    <li class="item"><a href="/">Home</a></li>
                    <li class="item"><a href="#pricing">Services</a></li>
                    <li class="item"><a href="">About us</a></li>
                    <li class="item"><a href="/Cart">Cart</a></li>
                    <li class="item"><a href="/NewWorkout">Add Item</a></li>
                </ul>
                <ul class="item1">
                    <li class=""><a href="">Sign In</a></li>
                    <li class=""><a href="#SignUp">Sign Up</a></li>
                </ul>
            </nav>
        </section>
        <section id="home2">
            <p></p>
            <h1 class="h-primary">Welcome To My Meals</h1>
            <p>Get your food delivery faster than you can imagine <br /> At the lowest price</p>
            <button class="btn">Order Now</button>
        </section>
    </section>
  )
}

export default Navigation
