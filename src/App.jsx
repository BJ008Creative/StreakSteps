import { AddProp } from "./components/AddProp";
import { Dashboard } from "./components/Dashboard";
import { StreakCard } from "./components/StreakCard";
import { useState } from "react";
import "./App.css";

function App() {
    const [goals, setGoals] = useState([
        { name: "DSA Learning", days: 30 },
        { name: "Music", days: 10 },
        { name: "Reading", days: 20 },
        { name: "Exercise", days: 15 }
    ]);

    function addGoal(goalName, day) {
        setGoals([
            ...goals,
            { name: goalName, days: day }
        ]);
    }

    function deleteGoal(deleteIndex) {
        setGoals(
            goals.filter((goal, index) => {
                return index !== deleteIndex;
            })
        );
    }

    return (
        <div className="app">
            <Dashboard />

            <AddProp addGoal={addGoal} />

            <div className="goals-grid">
                {goals.map((goal, index) => {
                    return (
                        <StreakCard
                            key={index}
                            goal={goal}
                            onDelete={deleteGoal}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;