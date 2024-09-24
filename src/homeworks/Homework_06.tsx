

import { useState } from "react";
import "./styles.css";

type Car = {
  brand: string;
  price: number;
  isDiesel: boolean;
};


const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true }
];

function Homework06() {
  const [carport, setCarport] = useState<Car[]>(cars);

  return (
    <div className="container">
      {carport.map((car, index) => (
        <div key={index} className="car-card">
          <h3>{car.brand}</h3>
          <p>Preis: ${car.price}</p>
          <p>Karftstoff: {car.isDiesel ? "Diesel" : "Benzin"}</p>
        </div>
      ))}
    </div>
  );
}

export default Homework06;
