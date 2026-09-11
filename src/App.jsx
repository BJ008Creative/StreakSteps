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
    function addGoal(goalName,day) {
            
            setGoals([
                ...goals,
                { name: goalName , days: day }
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
        <>
            <Dashboard />
            <AddProp addGoal={addGoal}></AddProp>
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
        </>
    );
}

export default App;