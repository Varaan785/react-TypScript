/*import { useState } from "react";
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
  { brand: "Audi", price: 50000, isDiesel: true },
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

export default Homework06;*/

//Überarbeitet
import { ReactNode } from "react";
import { v4 } from "uuid";

import { Cars } from "./types";
import "./styles.css";

function Homework_06() {
  const cars: Cars[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards: ReactNode = cars.map((car: Cars) => {
    const carId: string = v4();

    return (
      <div key={carId} className="car-card-wrapper">
        <div className="car-info-container">
          <p className="car-info-title">Brand:</p>
          <p className="car-info">{car.brand}</p>
        </div>
        <div className="car-info-container">
          <p className="car-info-title">Price:</p>
          <p className="car-info">{`${car.price}$`}</p>
        </div>
        <div className="car-info-container">
          <p className="car-info-title">Fuel type:</p>
          <p className="car-info">{car.isDiesel ? "Diesel" : "Petrol"}</p>
        </div>
      </div>
    );
  });

  return <div className="homework6-wrapper">{carCards}</div>;
}

export default Homework_06;
