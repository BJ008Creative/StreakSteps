import { useNavigate } from "react-router-dom";
import "./StreakCard.css";

function StreakCard(props) {
    const navigate = useNavigate();

    function openStreak() {
        navigate("/streak", {
            state: {
                goal: props.goal
            }
        });
    }

    return (
        <div
            className="streak-card"
            onClick={openStreak}
        >
            <div className="streak-icon">
            </div>

            <h2>{props.goal.name}</h2>

            <p>{props.goal.days} days</p>

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