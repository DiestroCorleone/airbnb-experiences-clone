/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data";
import Card from "./components/Card";

export default function App() {
    
    const experiencesData = data.map(experience => {
        return <Card
            key={experience.id}
            experience={experience}
        />    
    }); 
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">
                {experiencesData}
            </section>    
        </div>
    )
}