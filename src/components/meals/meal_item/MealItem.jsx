import React, { useState } from "react";
import classes from "./MealItem.module.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";


const MealItem = ({ name, decription, price }) => {
  const newPrice = price.toFixed(2);

  const [dataPrice, setDataPrice] = useState(newPrice);
  const [counter, setCounter] = useState(1);

  const addCounterHandler = () => {
    setCounter(counter + 1);
    setDataPrice((prevState) => +prevState + price);
  };
  const removeCounterHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setDataPrice((prevState) => +prevState - price);
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.decription}>{decription}</p>
        <p className={classes.price}>{newPrice}</p>
      </div>
      <div>
        <div className={classes.count_item}>
          <button onClick={addCounterHandler}>
            <AiFillPlusCircle />
          </button>
          <p>{counter}</p>
          <button onClick={removeCounterHandler}>
            <AiFillMinusCircle />
          </button>
        </div>
        <div className={classes.total}>
          <h1>Total: {Number(dataPrice).toFixed(2)} </h1>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
