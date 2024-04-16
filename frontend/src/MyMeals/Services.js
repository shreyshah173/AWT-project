import React from 'react';
import "./Navigation.css";
import img1 from "./pizza.png";
import img2 from "./plate food.png";
import img3 from "./delivery boy.png";

const Services = () => {
    return (
        <div>
            <section id="pricing">
                <div class="pricing1">
                    <h1 class="h-primary">Our Services</h1>
                </div>
                <div class="card-deck">
                    <div class="card">
                        <div class="card-header">
                            <img class="pizza-img" src={img1} alt="" />
                        </div>
                        <div class="card-body">
                            <h2 class="h-secondary center">Food Ordering</h2>
                            <p>The best Quality food for you and your family at any time at your doorstep</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <img class="plate-img" src={img2} alt="" />
                        </div>
                        <div class="card-body">
                            <h2 class="h-secondary center">Bulk Ordering</h2>
                            <p>You can order for a your family and friends and for any group of people</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <img class="delivery-img" src={img3} alt="" />
                        </div>
                        <div class="card-body">
                            <h2 class="h-secondary center">Fast delivery</h2>
                            <p>Order in the way you love and you want and it will delivered in 40 minutes</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
