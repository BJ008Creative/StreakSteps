import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { AddProp } from "../components/AddProp";
import { StreakCard } from "../components/StreakCard";

function Home() {
    const [goals, setGoals] = useState([
        { name: "DSA Learning", days: 30 },
        { name: "Music", days: 10 },
        { name: "Reading", days: 20 },
        { name: "Exercise", days: 15 }
    ]);

    function addGoal(goalName, day) {
        setGoals([
            ...goals,
            {
                name: goalName,
                days: day
            }
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
                            index={index}
                            onDelete={deleteGoal}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export { Home };