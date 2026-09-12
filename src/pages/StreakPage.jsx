import { useLocation, useNavigate } from "react-router-dom";
import { DateGrid } from "../components/DateGrid";
import "./StreakPage.css";

function StreakPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const goal = location.state?.goal;
    const goalIndex = location.state?.goalIndex;

    if (!goal) {
        return (
            <div className="streak-page">
                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back
                </button>

                <h1>Streak not found</h1>
            </div>
        );
    }

    return (
        <div className="streak-page">

            <button
                className="back-button"
                onClick={() => navigate("/")}
            >
                ← Back
            </button>

            <div className="streak-header">
                <h1>{goal.name}</h1>
                <p>{goal.days} days</p>
            </div>

            <DateGrid
                days={goal.days}
                storageKey={`streak-${goalIndex}`}
            />

        </div>
    );
}

export { StreakPage };