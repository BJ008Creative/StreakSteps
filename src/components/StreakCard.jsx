import "StreakCard.css";
function StreakCard(props) {
    return (
        <div className="streak-card">
            <div className="streak-icon">
            </div>

            <h2>{props.goal.name}</h2>
            <p>{props.goal.days} days</p>

            <button onClick={() => props.onDelete(props.index)}>
                Delete
            </button>
        </div>
    );
}

export { StreakCard };