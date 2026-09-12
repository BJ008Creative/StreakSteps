import { useState } from "react";
import "./DateGrid.css";

function DateGrid(props) {
    const days = [];

    for (let i = 1; i <= props.days; i++) {
        days.push(i);
    }

    // -----------------------------
    // TODAY
    // -----------------------------

    function getToday() {
        const today = new Date();

        return (
            today.getFullYear() +
            "-" +
            String(today.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(today.getDate()).padStart(2, "0")
        );
    }

    // -----------------------------
    // LOAD PROGRESS
    // -----------------------------

    const [completedDays, setCompletedDays] = useState(() => {
        const saved = localStorage.getItem(
            props.storageKey
        );

        return saved ? JSON.parse(saved) : [];
    });

    // -----------------------------
    // SAVE PROGRESS
    // -----------------------------

    function saveProgress(newCompletedDays) {
        setCompletedDays(newCompletedDays);

        localStorage.setItem(
            props.storageKey,
            JSON.stringify(newCompletedDays)
        );
    }

    // -----------------------------
    // MARK / UNMARK
    // -----------------------------

    function toggleDay(day) {

        const nextDay =
            completedDays.length + 1;

        // =================================
        // COMPLETED DAY
        // =================================
        //
        // Clicking a completed day removes
        // that day and everything after it.
        //
        // Example:
        // [1,2,3,4]
        // click 4
        // [1,2,3]
        //
        // IMPORTANT:
        // Day 4 is now immediately the
        // current day again.
        // =================================

        if (completedDays.includes(day)) {

            const newCompletedDays =
                completedDays.filter(
                    completedDay =>
                        completedDay < day
                );

            saveProgress(newCompletedDays);

            return;
        }

        // =================================
        // FUTURE DAY
        // =================================

        if (day !== nextDay) {
            return;
        }

        // =================================
        // MARK CURRENT DAY
        // =================================

        const newCompletedDays = [
            ...completedDays,
            day
        ];

        saveProgress(newCompletedDays);

        // Save the date on which this day
        // was completed.

        localStorage.setItem(
            `${props.storageKey}-date-${day}`,
            getToday()
        );
    }

    // -----------------------------
    // TARGET ACHIEVED
    // -----------------------------

    const targetAchieved =
        completedDays.length === props.days;

    // -----------------------------
    // SNAKE SIZE
    // -----------------------------

    const boxSize = 76;

    const snakeWidth =
        (days.length - 1) * boxSize + 76;

    return (
        <div className="date-grid">

            <div
                className="snake-track"
                style={{
                    width: `${snakeWidth + 80}px`
                }}
            >

                {days.map((day, index) => {

                    // -----------------------------
                    // SNAKE POSITION
                    // -----------------------------

                    const cycle = index % 8;

                    let row;

                    if (cycle <= 4) {
                        row = 4 - cycle;
                    } else {
                        row = cycle - 4;
                    }

                    // -----------------------------
                    // STATUS
                    // -----------------------------

                    const isCompleted =
                        completedDays.includes(day);

                    const nextDay =
                        completedDays.length + 1;

                    const isCurrentDay =
                        day === nextDay;

                    const isLocked =
                        !isCompleted &&
                        !isCurrentDay;

                    return (
                        <div
                            className={`date-box ${
                                isCompleted
                                    ? "completed"
                                    : ""
                            } ${
                                isLocked
                                    ? "locked"
                                    : ""
                            }`}
                            key={day}
                            style={{
                                left:
                                    `${index * boxSize}px`,

                                top:
                                    `${row * 76}px`
                            }}
                            onClick={() =>
                                toggleDay(day)
                            }
                        >

                            {/* FLAG */}

                            {isCompleted && (
                                <div className="green-flag">
                                    🚩
                                </div>
                            )}

                            {/* NUMBER */}

                            {day}

                        </div>
                    );
                })}

            </div>

            {/* TARGET ACHIEVED */}

            {targetAchieved && (
                <div className="celebration">

                    <div className="party-popper left">
                        🎉
                    </div>

                    <div className="target-achieved">
                        TARGET ACHIEVED!
                    </div>

                    <div className="party-popper right">
                        🎉
                    </div>

                </div>
            )}

        </div>
    );
}

export { DateGrid };