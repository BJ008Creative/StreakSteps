import "./StreakCard.css";
function StreakCard(props) {
    return (
        <div className="streak-card">
            <div className="streak-icon">
                {props.index}
            </div>

            <h2>{props.goal.name}</h2>
            <p>{props.goal.days} days</p>

            <button onClick={() => props.onDelete(props.index)}>
                -
            </button>
        </div>
    );
}

export { StreakCard };