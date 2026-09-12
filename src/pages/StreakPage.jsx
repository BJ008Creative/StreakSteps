import { useLocation, useNavigate } from "react-router-dom";
import { DateGrid } from "../components/Dategrid";

function StreakPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const goal = location.state?.goal;

    if (!goal) {
        return (
            <div className="streak-page">
                <button onClick={() => navigate("/")}>
                    ← Back
                </button>

                <h1>Streak not found</h1>
            </div>
        );
    }

    return (
        <div className="streak-page">
            <button onClick={() => navigate("/")}>
                ← Back
            </button>

            <h1>{goal.name}</h1>

            <p>{goal.days} days</p>

            <DateGrid days={goal.days} />
        </div>
    );
}

export { StreakPage };