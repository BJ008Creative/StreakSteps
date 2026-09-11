import { useState } from "react";

function AddProp(props) {
    const [goalName, setGoalName] = useState("");
    const [day, setDay] = useState("");

    function handleAdd() {
        if(goalName===""){
            return;
        }
        else if(Number(day)<=0 || day===""){
            return;
        }

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
        </>
    );
}

export { AddProp };