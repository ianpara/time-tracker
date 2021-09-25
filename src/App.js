import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import TimeCard from "./TimeCard";
import { timeData } from "./data";


function App() {

  useEffect(() => {
    document.title = "Time Tracking Dashboard ";
  }, []);

  // eslint-disable-next-line
  const [times, setTime] = useState(timeData);
  const [currentTime, setCurrentTime] = useState("daily");

  const handleTimeChange = (type) => {
    setCurrentTime(type);
  }

  return (
    <main className="flex h-screen mx-auto px-14">
      <div className="py-10 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-7 md:grid-rows-4 lg:grid-rows-2 gap-6">
        <ProfileCard handleTimeChange={handleTimeChange} currentTime={currentTime} />
        <TimeCard time={times.filter((time) => time.title === "Work")} currentTime={currentTime} />
        <TimeCard time={times.filter((time) => time.title === "Play")} currentTime={currentTime} />
        <TimeCard time={times.filter((time) => time.title === "Study")} currentTime={currentTime} />
        <TimeCard time={times.filter((time) => time.title === "Exercise")} currentTime={currentTime} />
        <TimeCard time={times.filter((time) => time.title === "Social")} currentTime={currentTime} />
        <TimeCard time={times.filter((time) => time.title === "Self Care")} currentTime={currentTime} />
      </div>
    </main>
  );
}

export default App;
