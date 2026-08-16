import { Dashboard } from "./components/Dashboard";
import { StreakCard } from "./components/StreakCard";

const goals = [
    {
        name: "DSA Learning",
        days: 30
    },
    {
        name: "Music",
        days: 10
    },
    {
        name: "Reading",
        days: 20
    },
    {
        name: "Exercise",
        days: 15
    }
];

function App() {
    return (
        <>
            <Dashboard />

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