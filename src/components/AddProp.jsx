import { useState } from "react";
import "AddProp.css";
function AddProp(props) {
    const [goalName, setGoalName] = useState("");
    const [day, setDay] = useState("");
    const [error, setError] = useState("");
    function handleAdd() {
        if (goalName === "") {
            setError("Please enter a valid goal name");
            return;
        }

        if (day === "" || Number(day) <= 0) {
            setError("Please enter a valid number of days");
            return;
        }

        setError("");
        props.addGoal(goalName, Number(day));
    }

   return (
    <section className="add-streak">
        <div className="add-streak-icon">
            +
        </div>

        <div className="add-streak-content">
            <h2>Add a new streak</h2>

            <div className="add-streak-form">
                <input
                    value={goalName}
                    onChange={(event) => setGoalName(event.target.value)}
                    placeholder="Enter goal name"
                />

                <input
                    type="number"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                    placeholder="Enter number of days"
                />

                <button onClick={handleAdd}>
                    Add Streak
                </button>
            </div>

            {error && <p className="error">{error}</p>}
        </div>
    </section>
);
}

export { AddProp };