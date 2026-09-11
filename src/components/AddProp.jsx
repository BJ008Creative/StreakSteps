import { useState } from "react";

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
        <>
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
            {error && <p>{error}</p>}
        </>
    );
}

export { AddProp };