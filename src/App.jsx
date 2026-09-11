import { AddProp } from "./components/AddProp";
import { Dashboard } from "./components/Dashboard";
import { StreakCard } from "./components/StreakCard";
import { useState } from "react";



function App() {
    const [goals, setGoals] = useState([
    { name: "DSA Learning", days: 30 },
    { name: "Music", days: 10 },
    { name: "Reading", days: 20 },
    { name: "Exercise", days: 15 }
]);
    function addGoal(goalName) {
    setGoals([
        ...goals,
        { name: goalName , days: 0 }
    ]);
}
    return (
        <>
            <Dashboard />
            <AddProp addGoal={addGoal}></AddProp>
            {goals.map((goal, index) => {
                return (
                    <StreakCard
                        key={index}
                        goal={goal}
                    />
                );
            })}
        </>
    );
}

export default App;