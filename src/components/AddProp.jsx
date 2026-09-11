import { useState } from "react";

function AddProp(props) {
    const [goalName, setGoalName] = useState("");

    function handleAdd() {
        props.addGoal(goalName);
    }

    return (
        <>
            <input
                value={goalName}
                onChange={(event) => setGoalName(event.target.value)}
                placeholder="Enter goal name"
            />

            <button onClick={handleAdd}>
                Add Streak
            </button>
        </>
    );
}

export { AddProp };