import React from "react";
import classes from "./MealsSum.module.css";

const MealSum = () => {
  return (
    <section className={classes.sum}>
      <h3>Delicious Food, Delivered To You</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealSum;
