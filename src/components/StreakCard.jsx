import { useNavigate } from "react-router-dom";
import "./StreakCard.css";

function StreakCard(props) {
    const navigate = useNavigate();

    function openStreak() {
        navigate("/streak", {
            state: {
                goal: props.goal,
                goalIndex: props.index
            }
        });
    }

    return (
        <div
            className="streak-card"
            onClick={openStreak}
        >
            <div className="streak-icon">
                <p>{props.index+1}
                </p>
            </div>

            <h2>{props.goal.name}</h2>

            

            <button
                onClick={(event) => {
                    event.stopPropagation();
                    props.onDelete(props.index);
                }}
            >
                −
            </button>
        </div>
    );
}

export { StreakCard };