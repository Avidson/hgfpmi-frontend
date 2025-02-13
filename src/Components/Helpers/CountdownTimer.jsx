import { useState, useEffect } from "react";

const CountdownTimer = ({ text }) => {
  const initialHours = 0.1; // Set the initial countdown time (1 hour in this case)
  const initialTimeLeft = initialHours * 60 * 60; // Convert hours to seconds

  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem("countdownTime");
    const now = new Date().getTime();
    if (storedTime) {
      const { time, timestamp } = JSON.parse(storedTime);
      const elapsed = Math.floor((now - timestamp) / 1000);
      return Math.max(time - elapsed, 0);
    }
    return initialTimeLeft;
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const updatedTime = prevTime - 1;
          localStorage.setItem(
            "countdownTime",
            JSON.stringify({ time: updatedTime, timestamp: new Date().getTime() })
          );
          return updatedTime;
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup on component unmount
    } else {
      localStorage.removeItem("countdownTime"); // Clear storage when time reaches 0
    }
  }, [timeLeft]);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-3">
      {timeLeft > 0 ? (
        <>
          <h2 className="text-[35px] phone:text-[24px] text-main-color-dark font-semibold">
            {text}
          </h2>
          <p className="text-[35px] phone:text-[24px] text-main-color-dark font-semibold">
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </>
      ) : (
        <h2 className="text-[35px] phone:text-[24px] text-red-500 font-bold">
          Live Now
        </h2>
      )}
    </div>
  );
};

export default CountdownTimer;
