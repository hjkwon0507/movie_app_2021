import React from "react";

const FoodILike = [
  {
    id: 1,
    name: Kimchi,
    rating: 5,
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg" 
  },
  {
    id: 2,
    name: Samgyeopsal,
    rating: 4.9,
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg" 
  },
  {
    id: 3,
    name: Bibimbap,
    rating: 4.7,
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg" 
  },
  {
    id: 4,
    name: Doncasu,
    rating: 4.5,
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg" 
  },
  {
    id: 5,
    name: Kimbap,
    rating: 4,
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg" 
  }
];

function Food({name, rating, picture}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

function App(){
  return (
    <div>
      {FoodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} picture={dish.image} />
      ))}
    </div>
  );
}


export default App;
