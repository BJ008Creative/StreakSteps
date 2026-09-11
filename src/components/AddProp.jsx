import { useState } from "react";

function AddProp(props) {

    const [goalName, setGoalName] = useState("");

    return (
        <>
            <input
                value={goalName}
                onChange={(event) => setGoalName(event.target.value)}
                placeholder="Enter goal name"
            />

            <button onClick={props.addGoal}>
                Add Streak
            </button>
        </>
    );
}

export { AddProp };