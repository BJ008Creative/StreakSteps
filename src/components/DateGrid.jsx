import "./DateGrid.css";

function DateGrid(props) {
    const dates = [];

    for (let i = 1; i <= props.days; i++) {
        dates.push(i);
    }

    return (
        <div className="date-grid">
            {dates.map((date) => {
                return (
                    <div
                        className="date-box"
                        key={date}
                    >
                        {date}
                    </div>
                );
            })}
        </div>
    );
}

export { DateGrid };