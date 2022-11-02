import React from "react";
import AvaiLableMeals from "../avail-able-meal/AvaiLabelMeals";
import MealSum from "../meals-sum/MealSum";

const Meal = () => {
  return (
    <div>
      <MealSum />
      <AvaiLableMeals/>
    </div>
  );
};

export default Meal;
