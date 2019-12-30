import React from "react";
import NewGoal from "./components/NewGoal/NewGoal";
import GoalList from "./components/GoalList/GoalList";

import "./App.css";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students" },
    { id: "cg4", text: "Bootstrap my final project" }
  ];

const addNewGoalHandler = (newGoal) => {
  courseGoals.push(newGoal);
  console.log(courseGoals);
}

  return (
    <div className="course-goals">
      <h2> Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;