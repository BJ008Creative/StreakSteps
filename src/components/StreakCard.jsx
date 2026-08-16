function StreakCard(props) {
    return (
        <>
            <h1>{props.goal.name}</h1>
            <p>{props.goal.days} days</p>
        </>
    );
}

export { StreakCard };